from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t
from ..models import position_model as models
from ..schemas import position_schema as schemas


def get_position(db: Session, position_id: int):
    position = db.query(models.Position).filter(models.Position.id == position_id).first()
    if not position:
        raise HTTPException(status_code=404, detail="Position not found")
    return position


def get_position_by_name(db: Session, name: str) -> schemas.PositionBase:
    return db.query(models.Position).filter(models.Position.name == name).first()


def get_positions(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.PositionOut]:
    return db.query(models.Position).offset(skip).limit(limit).all()


def create_position(db: Session, position: schemas.PositionCreate):
    db_position = models.Position(name=position.name)
    db.add(db_position)
    db.commit()
    db.refresh(db_position)
    return db_position


def delete_position(db: Session, position_id: int):
    position = get_position(db, position_id)
    if not position:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Position not found")
    db.delete(position)
    db.commit()
    return position


def edit_position(
    db: Session, position_id: int, position: schemas.PositionEdit
) -> schemas.Position:
    db_position = get_position(db, position_id)
    if not db_position:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Position not found")
    update_data = position.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_position, key, value)

    db.add(db_position)
    db.commit()
    db.refresh(db_position)
    return db_position