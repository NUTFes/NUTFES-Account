from datetime import datetime
from pydantic import BaseModel
import typing as t

class TypeBase(BaseModel):
    name: str
    
class TypeOut(TypeBase):
    pass

class TypeCreate(TypeBase):
    name: str
    class Config:
        orm_mode = True

class TypeEdit(TypeBase):
    name: str
    class Config:
        orm_mode = True

class Type(TypeBase):
    id: int
    name: str
    class Config:
        orm_mode = True