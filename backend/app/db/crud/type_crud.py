from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import type_model as models
from ..schemas import type_schema as schemas



def get_type(db: Session, type_id: int):
    type = db.query(models.Type).filter(models.Type.id == type_id).first()
    if not type:
        raise HTTPException(status_code=404, detail="Type not found")
    return type


def get_type_by_name(db: Session, name: str) -> schemas.TypeBase:
    return db.query(models.Type).filter(models.Type.name == name).first()


def get_types(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.TypeOut]:
    return db.query(models.Type).offset(skip).limit(limit).all()


def create_type(db: Session, type: schemas.TypeCreate):
    db_type = models.Type(name=type.name)
    db.add(db_type)
    db.commit()
    db.refresh(db_type)
    return db_type


def delete_type(db: Session, type_id: int):
    type = get_type(db, type_id)
    if not type:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Type not found")
    db.delete(type)
    db.commit()
    return type


def edit_type(
    db: Session, type_id: int, type: schemas.TypeEdit
) -> schemas.Type:
    db_type = get_type(db, type_id)
    if not db_type:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Type not found")
    update_data = type.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_type, key, value)

    db.add(db_type)
    db.commit()
    db.refresh(db_type)
    return db_type