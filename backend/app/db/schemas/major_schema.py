from datetime import datetime
from pydantic import BaseModel
import typing as t


class MajorBase(BaseModel):
    name: str
    
class MajorOut(MajorBase):
    pass

class MajorCreate(MajorBase):
    name: str
    class Config:
        orm_mode = True

class MajorEdit(MajorBase):
    name: str
    class Config:
        orm_mode = True

class Major(MajorBase):
    id: int
    name: str
    class Config:
        orm_mode = True