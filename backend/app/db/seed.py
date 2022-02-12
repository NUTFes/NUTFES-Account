from sqlalchemyseed import load_entities_from_json
from sqlalchemyseed import Seeder
from session import session
import glob

for p in glob.glob('/app/app/db/fixtures/*'):
  entities = load_entities_from_json(p)
  print(p)
  print(entities)
  print('--------------------------------------------------------------------')
  seeder = Seeder(session)
  seeder.seed(entities)
  
session.commit()