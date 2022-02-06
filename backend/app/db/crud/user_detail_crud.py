from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import user_detail_model as models
from ..schemas import user_detail_schema as schemas
from app.core.security import get_password_hash


def get_user_detail(db: Session, user_detail_id: int):
    user_detail = db.query(models.UserDetail).filter(models.UserDetail.id == user_detail_id).first()
    if not user_detail:
        raise HTTPException(status_code=404, detail="UserDetail not found")
    return user_detail


def get_user_details(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.UserDetailOut]:
    return db.query(models.UserDetail).offset(skip).limit(limit).all()


def create_user_detail(db: Session, user_detail: schemas.UserDetailCreate):
    db_user_detail = models.UserDetail(
        sex_id=user_detail.sex_id,
        birth=user_detail.birth,
        tel=user_detail.tel,
        grade_id=user_detail.grade_id,
        major_id=user_detail.major_id,
        bureau_id=user_detail.bureau_id,
        department_id=user_detail.department_id,
        position_id=user_detail.position_id
    )
    db.add(db_user_detail)
    db.commit()
    db.refresh(db_user_detail)
    return db_user_detail


def delete_user_detail(db: Session, user_detail_id: int):
    user_detail = get_user_detail(db, user_detail_id)
    if not user_detail:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="UserDetail not found")
    db.delete(user_detail)
    db.commit()
    return user_detail


def edit_user_detail(
    db: Session, user_detail_id: int, user_detail: schemas.UserDetailEdit
) -> schemas.UserDetail:
    db_user_detail = get_user_detail(db, user_detail_id)
    if not db_user_detail:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="UserDetail not found")
    update_data = user_detail.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_user_detail, key, value)

    db.add(db_user_detail)
    db.commit()
    db.refresh(db_user_detail)
    return db_user_detail