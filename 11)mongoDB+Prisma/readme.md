

## Passo a passo (inicial)

criar conta
criar cluster
connect 
network acess - allow acess from anywhere (ip liberado)
database acess > edit

seção cluster
collections > create a database 
insert document > add field (define tbm tipo)

// restart automatico
npm install nodemon -D
npx nodemon arquivo.js


// prisma
npm install prisma -D
npm install @prisma/client
npx prisma init


/prisma/schema.prisma
datsource db > provider: "mongodb"
url: "ENV:("")"
url+user+password+database


npx prisma generate

