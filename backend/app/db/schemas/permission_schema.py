from datetime import datetime
from pydantic import BaseModel
import typing as t

class PermissionBase(BaseModel):
    name: str
    
class PermissionOut(PermissionBase):
    pass

class PermissionCreate(PermissionBase):
    name: str
    class Config:
        orm_mode = True

class PermissionEdit(PermissionBase):
    name: str
    class Config:
        orm_mode = True

class Permission(PermissionBase):
    id: int
    name: str
    class Config:
        orm_mode = True