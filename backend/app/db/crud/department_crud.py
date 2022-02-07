from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import department_model as models
from ..schemas import department_schema as schemas


def get_department(db: Session, department_id: int):
    department = db.query(models.Department).filter(models.Department.id == department_id).first()
    if not department:
        raise HTTPException(status_code=404, detail="Department not found")
    return department

    
def get_department(db: Session, department_id: int):
    department = db.query(models.Department).filter(models.Department.id == department_id).first()
    if not department:
        raise HTTPException(status_code=404, detail="Department not found")
    return department


def get_department_by_name(db: Session, name: str) -> schemas.DepartmentBase:
    return db.query(models.Department).filter(models.Department.name == name).first()


def get_departments(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.DepartmentOut]:
    return db.query(models.Department).offset(skip).limit(limit).all()


def create_department(db: Session, department: schemas.DepartmentCreate):
    db_department = models.Department(name=department.name)
    db.add(db_department)
    db.commit()
    db.refresh(db_department)
    return db_department



def delete_department(db: Session, department_id: int):
    department = get_department(db, department_id)
    if not department:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Department not found")
    db.delete(department)
    db.commit()
    return department


def edit_department(
    db: Session, department_id: int, department: schemas.DepartmentEdit
) -> schemas.Department:
    db_department = get_department(db, department_id)
    if not db_department:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Department not found")
    update_data = department.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_department, key, value)

    db.add(db_department)
    db.commit()
    db.refresh(db_department)
    return db_department