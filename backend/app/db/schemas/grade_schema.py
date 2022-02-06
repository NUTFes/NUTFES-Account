from datetime import datetime
from pydantic import BaseModel
import typing as t

class GradeBase(BaseModel):
    name: str
    
class GradeOut(GradeBase):
    pass

class GradeCreate(GradeBase):
    name: str
    class Config:
        orm_mode = True

class GradeEdit(GradeBase):
    name: str
    class Config:
        orm_mode = True