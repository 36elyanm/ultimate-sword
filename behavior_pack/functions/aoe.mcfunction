scoreboard objectives add us_cd dummy
scoreboard players add @a us_cd 0

scoreboard players remove @a[hasitem={item=ultimate_sword:ultimate_sword,location=slot.weapon.mainhand},scores={us_cd=1..}] us_cd 1

execute as @a[hasitem={item=ultimate_sword:ultimate_sword,location=slot.weapon.mainhand},scores={us_cd=0}] at @s run kill @e[type=!minecraft:player,r=10,c=1000]
scoreboard players set @a[hasitem={item=ultimate_sword:ultimate_sword,location=slot.weapon.mainhand},scores={us_cd=0}] us_cd 60

execute as @a unless entity @s[hasitem={item=ultimate_sword:ultimate_sword,location=slot.weapon.mainhand}] run scoreboard players set @s us_cd 0
