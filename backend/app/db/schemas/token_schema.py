from datetime import datetime
from pydantic import BaseModel
import typing as t

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"