from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import bureau_model as models
from ..schemas import bureau_schema as schemas



def get_bureau(db: Session, bureau_id: int):
    bureau = db.query(models.Bureau).filter(models.Bureau.id == bureau_id).first()
    if not bureau:
        raise HTTPException(status_code=404, detail="Bureau not found")
    return bureau


def get_bureau_by_name(db: Session, name: str) -> schemas.BureauBase:
    return db.query(models.Bureau).filter(models.Bureau.name == name).first()


def get_bureaus(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.BureauOut]:
    return db.query(models.Bureau).offset(skip).limit(limit).all()


def create_bureau(db: Session, bureau: schemas.BureauCreate):
    db_bureau = models.Bureau(name=bureau.name)
    db.add(db_bureau)
    db.commit()
    db.refresh(db_bureau)
    return db_bureau


def delete_bureau(db: Session, bureau_id: int):
    bureau = get_bureau(db, bureau_id)
    if not bureau:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Bureau not found")
    db.delete(bureau)
    db.commit()
    return bureau


def edit_bureau(
    db: Session, bureau_id: int, bureau: schemas.BureauEdit
) -> schemas.Bureau:
    db_bureau = get_bureau(db, bureau_id)
    if not db_bureau:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Bureau not found")
    update_data = bureau.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_bureau, key, value)

    db.add(db_bureau)
    db.commit()
    db.refresh(db_bureau)
    return db_bureau