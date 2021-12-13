from datetime import datetime
from pydantic import BaseModel
import typing as t


class UserBase(BaseModel):
    email: str
    number: int
    is_active: bool = True
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None
    
    first_name_kana: str = None
    last_name_kana: str = None
    
    sex: str = None
    birth: str = None
    tel: str = None
    grade: str = None
    major: str = None
    department: str = None
    bureau: str = None
    position: str = None

    permission: str = None



class UserOut(UserBase):
    pass


class UserCreate(UserBase):
    password: str

    class Config:
        orm_mode = True


class UserEdit(UserBase):
    password: t.Optional[str] = None

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    # updated_at: datetime
    # created_at: datetime

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"
