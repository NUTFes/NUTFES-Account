from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import sex_model as models
from ..schemas import sex_schema as schemas


def get_sex(db: Session, sex_id: int):
    sex = db.query(models.Sex).filter(models.Sex.id == sex_id).first()
    if not sex:
        raise HTTPException(status_code=404, detail="Sex not found")
    return sex


def get_sex_by_name(db: Session, name: str) -> schemas.SexBase:
    return db.query(models.Sex).filter(models.Sex.name == name).first()


def get_sexs(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.SexOut]:
    return db.query(models.Sex).offset(skip).limit(limit).all()


def create_sex(db: Session, sex: schemas.SexCreate):
    db_sex = models.Sex(name=sex.name)
    db.add(db_sex)
    db.commit()
    db.refresh(db_sex)
    return db_sex


def delete_sex(db: Session, sex_id: int):
    sex = get_sex(db, sex_id)
    if not sex:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Sex not found")
    db.delete(sex)
    db.commit()
    return sex


def edit_sex(
    db: Session, sex_id: int, sex: schemas.SexEdit
) -> schemas.Sex:
    db_sex = get_sex(db, sex_id)
    if not db_sex:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Sex not found")
    update_data = sex.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_sex, key, value)

    db.add(db_sex)
    db.commit()
    db.refresh(db_sex)
    return db_sex