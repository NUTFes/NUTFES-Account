from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import grade_model as models
from ..schemas import grade_schema as schemas


def get_grade(db: Session, grade_id: int):
    grade = db.query(models.Grade).filter(models.Grade.id == grade_id).first()
    if not grade:
        raise HTTPException(status_code=404, detail="Grade not found")
    return grade


def get_grade_by_name(db: Session, name: str) -> schemas.GradeBase:
    return db.query(models.Grade).filter(models.Grade.name == name).first()


def get_grades(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.GradeOut]:
    return db.query(models.Grade).offset(skip).limit(limit).all()


def create_grade(db: Session, grade: schemas.GradeCreate):
    db_grade = models.Grade(name=grade.name)
    db.add(db_grade)
    db.commit()
    db.refresh(db_grade)
    return db_grade


def delete_grade(db: Session, grade_id: int):
    grade = get_grade(db, grade_id)
    if not grade:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Grade not found")
    db.delete(grade)
    db.commit()
    return grade


def edit_grade(
    db: Session, grade_id: int, grade: schemas.GradeEdit
) -> schemas.Grade:
    db_grade = get_grade(db, grade_id)
    if not db_grade:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Grade not found")
    update_data = grade.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_grade, key, value)

    db.add(db_grade)
    db.commit()
    db.refresh(db_grade)
    return db_grade