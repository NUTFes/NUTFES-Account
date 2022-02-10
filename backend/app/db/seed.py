from sqlalchemyseed import load_entities_from_json
from dqlalchemyseed import Seeder
from sqlalchemy.orm import Session
import glob


path = './fixtures'
for p in glob.glob('./fixtures/*'):
  entities = load_entities_from_json(p)
  seeder = Seeder(Session)
  seeder.seed(entities)

seeder.session.commit()