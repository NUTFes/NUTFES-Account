from datetime import datetime
from pydantic import BaseModel
import typing as t

class PositionBase(BaseModel):
    name: str
    
class PositionOut(PositionBase):
    pass

class PositionCreate(PositionBase):
    name: str
    class Config:
        orm_mode = True

class PositionEdit(PositionBase):
    name: str
    class Config:
        orm_mode = True

class Position(PositionBase):
    id: int
    name: str
    class Config:
        orm_mode = True