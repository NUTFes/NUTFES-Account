from datetime import datetime
from pydantic import BaseModel
import typing as t


class DepartmentBase(BaseModel):
    name: str
    
class DepartmentOut(DepartmentBase):
    pass

class DepartmentCreate(DepartmentBase):
    name: str
    class Config:
        orm_mode = True

class DepartmentEdit(DepartmentBase):
    name: str
    class Config:
        orm_mode = True

class Department(DepartmentBase):
    id: int
    name: str
    class Config:
        orm_mode = True