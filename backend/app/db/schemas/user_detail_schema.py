from datetime import datetime
from pydantic import BaseModel
import typing as t

class UserDetailBase(BaseModel):
    sex_id: int
    birth: datetime
    tel: str
    grade_id: int
    major_id: int
    bureau_id: int
    department_id: int
    position_id: int
    
class UserDetailOut(UserDetailBase):
    pass

class UserDetailCreate(UserDetailBase):
    class Config:
        orm_mode = True

class UserDetailEdit(UserDetailBase):
    class Config:
        orm_mode = True

class UserDetail(UserDetailBase):
    id: int
    updated_at: datetime
    created_at: datetime
    class Config:
        orm_mode = True