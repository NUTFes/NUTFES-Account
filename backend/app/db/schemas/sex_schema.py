from datetime import datetime
from pydantic import BaseModel
import typing as t

class SexBase(BaseModel):
    name: str
    
class SexOut(SexBase):
    pass

class SexCreate(SexBase):
    name: str
    class Config:
        orm_mode = True

class SexEdit(SexBase):
    name: str
    class Config:
        orm_mode = True

class Sex(SexBase):
    id: int
    name: str
    class Config:
        orm_mode = True