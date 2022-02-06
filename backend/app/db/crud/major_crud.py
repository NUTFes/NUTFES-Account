from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import major_model as models
from ..schemas import major_schema as schemas


def get_major(db: Session, major_id: int):
    major = db.query(models.Major).filter(models.Major.id == major_id).first()
    if not major:
        raise HTTPException(status_code=404, detail="Major not found")
    return major


def get_major_by_name(db: Session, name: str) -> schemas.MajorBase:
    return db.query(models.Major).filter(models.Major.name == name).first()


def get_majors(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.MajorOut]:
    return db.query(models.Major).offset(skip).limit(limit).all()


def create_major(db: Session, major: schemas.MajorCreate):
    db_major = models.Major(name=major.name)
    db.add(db_major)
    db.commit()
    db.refresh(db_major)
    return db_major


def delete_major(db: Session, major_id: int):
    major = get_major(db, major_id)
    if not major:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Major not found")
    db.delete(major)
    db.commit()
    return major


def edit_major(
    db: Session, major_id: int, major: schemas.MajorEdit
) -> schemas.Major:
    db_major = get_major(db, major_id)
    if not db_major:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Major not found")
    update_data = major.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_major, key, value)

    db.add(db_major)
    db.commit()
    db.refresh(db_major)
    return db_major