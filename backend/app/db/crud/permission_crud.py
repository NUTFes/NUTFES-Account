from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import permission_model as models
from ..schemas import permission_schema as schemas


def get_permission_by_name(db: Session, name: str) -> schemas.PermissionBase:
    return db.query(models.Permission).filter(models.Permission.name == name).first()


def get_permission(db: Session, permission_id: int):
    permission = db.query(models.Permission).filter(models.Permission.id == permission_id).first()
    if not permission:
        raise HTTPException(status_code=404, detail="Permission not found")
    return permission


def get_permissions(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.PermissionOut]:
    return db.query(models.Permission).offset(skip).limit(limit).all()


def create_permission(db: Session, permission: schemas.PermissionCreate):
    db_permission = models.Permission(name=permission.name)
    db.add(db_permission)
    db.commit()
    db.refresh(db_permission)
    return db_permission


def delete_permission(db: Session, permission_id: int):
    permission = get_permission(db, permission_id)
    if not permission:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Permission not found")
    db.delete(permission)
    db.commit()
    return permission


def edit_permission(
    db: Session, permission_id: int, permission: schemas.PermissionEdit
) -> schemas.Permission:
    db_permission = get_permission(db, permission_id)
    if not db_permission:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Permission not found")
    update_data = permission.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_permission, key, value)

    db.add(db_permission)
    db.commit()
    db.refresh(db_permission)
    return db_permission