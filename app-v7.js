// KidsIsland Chinese Learning Application Engine (Chinese for English & Spanish Kids)
// Integrated with Stitch MCP Project 7693320122842135320

// CURATED CHINESE VOCABULARY DATASET FOR KIDS (EN & ES Dual Base)
const CHINESE_VOCABULARY = [
  {"id": 1, "hanzi": "苹果", "pinyin": "píng guǒ", "tones": [2, 3], "en": "Apple", "es": "Manzana", "emoji": "🍎", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃红苹果。", "sentencePinyin": "Wǒ xǐ huan chī hóng píng guǒ.", "sentenceEn": "I like to eat red apples.", "sentenceEs": "Me gusta comer manzanas rojas.", "radicalHint": "艹 + 果"},
  {"id": 2, "hanzi": "大熊猫", "pinyin": "dà xióng māo", "tones": [4, 2, 1], "en": "Giant Panda", "es": "Oso Panda", "emoji": "🐼", "category": "Animals", "level": "beginner", "sentenceZh": "大熊猫吃竹子，真可爱！", "sentencePinyin": "Dà xióng māo chī zhú zi, zhēn kě ài!", "sentenceEn": "Giant pandas eat bamboo, so cute!", "sentenceEs": "¡El panda come bambú, qué lindo!", "radicalHint": "犭 + 猫"},
  {"id": 3, "hanzi": "小狗", "pinyin": "xiǎo gǒu", "tones": [3, 3], "en": "Dog", "es": "Perro", "emoji": "🐶", "category": "Animals", "level": "beginner", "sentenceZh": "小狗摇着尾巴向我跑来。", "sentencePinyin": "Xiǎo gǒu yáo zhe wěi ba.", "sentenceEn": "The puppy ran to me wagging its tail.", "sentenceEs": "El perrito corrió hacia mí.", "radicalHint": "犭(Animal radical)"},
  {"id": 4, "hanzi": "小猫", "pinyin": "xiǎo māo", "tones": [3, 1], "en": "Cat", "es": "Gato", "emoji": "🐱", "category": "Animals", "level": "beginner", "sentenceZh": "小猫在阳光下睡觉。", "sentencePinyin": "Xiǎo māo zài yáng guāng xià.", "sentenceEn": "The kitten sleeps in sunshine.", "sentenceEs": "El gatito duerme bajo el sol.", "radicalHint": "犭 + 苗"},
  {"id": 5, "hanzi": "大象", "pinyin": "dà xiàng", "tones": [4, 4], "en": "Elephant", "es": "Elefante", "emoji": "🐘", "category": "Animals", "level": "intermediate", "sentenceZh": "大象的长鼻子会喷水。", "sentencePinyin": "Dà xiàng de cháng bí zi.", "sentenceEn": "Elephant's trunk sprays water.", "sentenceEs": "Trompa de elefante rocía agua.", "radicalHint": "象 Pictogram"},
  {"id": 6, "hanzi": "兔子", "pinyin": "tù zi", "tones": [4, 0], "en": "Rabbit", "es": "Conejo", "emoji": "🐰", "category": "Animals", "level": "beginner", "sentenceZh": "小白兔有长长的耳朵。", "sentencePinyin": "Xiǎo bái tù yǒu cháng ěr duo.", "sentenceEn": "Rabbit has long ears.", "sentenceEs": "El conejo tiene orejas largas.", "radicalHint": "兔 Pictogram"},
  {"id": 7, "hanzi": "小鸟", "pinyin": "xiǎo niǎo", "tones": [3, 3], "en": "Bird", "es": "Pájaro", "emoji": "🐦", "category": "Animals", "level": "beginner", "sentenceZh": "小鸟在树枝上快乐地唱歌。", "sentencePinyin": "Xiǎo niǎo zài shù zhī shàng.", "sentenceEn": "The bird sings on the branch.", "sentenceEs": "El pájaro canta en la rama.", "radicalHint": "鸟 Pictogram"},
  {"id": 8, "hanzi": "小鱼", "pinyin": "xiǎo yú", "tones": [3, 2], "en": "Fish", "es": "Pez", "emoji": "🐟", "category": "Animals", "level": "beginner", "sentenceZh": "小鱼在清澈的水里游泳。", "sentencePinyin": "Xiǎo yú zài shuǐ lǐ yóu yǒng.", "sentenceEn": "Fish swims in clear water.", "sentenceEs": "El pez nada en el agua.", "radicalHint": "鱼 Pictogram"},
  {"id": 9, "hanzi": "狮子", "pinyin": "shī zi", "tones": [1, 0], "en": "Lion", "es": "León", "emoji": "🦁", "category": "Animals", "level": "intermediate", "sentenceZh": "狮子是草原之王。", "sentencePinyin": "Shī zi shì cǎo yuán zhī wáng.", "sentenceEn": "Lion is the king of savanna.", "sentenceEs": "El león es el rey de sabana.", "radicalHint": "犭 Radical"},
  {"id": 10, "hanzi": "老虎", "pinyin": "lǎo hǔ", "tones": [3, 3], "en": "Tiger", "es": "Tigre", "emoji": "🐯", "category": "Animals", "level": "intermediate", "sentenceZh": "老虎身上有黑色的条纹。", "sentencePinyin": "Lǎo hǔ shēn shàng yǒu wén.", "sentenceEn": "Tigers have black stripes.", "sentenceEs": "Tigres tienen rayas negras.", "radicalHint": "虍 Radical"},
  {"id": 11, "hanzi": "猴子", "pinyin": "hóu zi", "tones": [2, 0], "en": "Monkey", "es": "Mono", "emoji": "🐒", "category": "Animals", "level": "intermediate", "sentenceZh": "小猴子喜欢吃香蕉。", "sentencePinyin": "Xiǎo hóu zi xǐ huan xiāng jiāo.", "sentenceEn": "Monkeys love bananas.", "sentenceEs": "A los monos les gusta el plátano.", "radicalHint": "犭 Radical"},
  {"id": 12, "hanzi": "鸭子", "pinyin": "yā zi", "tones": [1, 0], "en": "Duck", "es": "Pato", "emoji": "🦆", "category": "Animals", "level": "beginner", "sentenceZh": "小鸭子在池塘里摇摇摆摆。", "sentencePinyin": "Xiǎo yā zi zài chí táng lǐ.", "sentenceEn": "The duck waddles in pond.", "sentenceEs": "El patito se tambalea.", "radicalHint": "鸟 Radical"},
  {"id": 13, "hanzi": "小羊", "pinyin": "xiǎo yáng", "tones": [3, 2], "en": "Sheep", "es": "Oveja", "emoji": "🐑", "category": "Animals", "level": "beginner", "sentenceZh": "小羊在吃绿油油的草。", "sentencePinyin": "Xiǎo yáng zài chī cǎo.", "sentenceEn": "Sheep eats green grass.", "sentenceEs": "La oveja come hierba verde.", "radicalHint": "羊 Pictogram"},
  {"id": 14, "hanzi": "骏马", "pinyin": "jùn mǎ", "tones": [4, 3], "en": "Horse", "es": "Caballo", "emoji": "🐴", "category": "Animals", "level": "intermediate", "sentenceZh": "马儿在广阔的草地上奔跑。", "sentencePinyin": "Mǎ er zài cǎo dì shàng bēn pǎo.", "sentenceEn": "The horse runs across field.", "sentenceEs": "El caballo corre por el campo.", "radicalHint": "马 Pictogram"},
  {"id": 15, "hanzi": "企鹅", "pinyin": "qǐ é", "tones": [3, 2], "en": "Penguin", "es": "Pingüino", "emoji": "🐧", "category": "Animals", "level": "advanced", "sentenceZh": "企鹅生活在冰天雪地的南极。", "sentencePinyin": "Qǐ é shēng huó zài nán jí.", "sentenceEn": "Penguins live in Antarctica.", "sentenceEs": "Los pingüinos viven en la Antártida.", "radicalHint": "鸟 Radical"},
  {"id": 16, "hanzi": "长颈鹿", "pinyin": "cháng jǐng lù", "tones": [2, 3, 4], "en": "Giraffe", "es": "Jirafa", "emoji": "🦒", "category": "Animals", "level": "intermediate", "sentenceZh": "长颈鹿脖子真长。", "sentencePinyin": "Cháng jǐng lù bó zi zhēn cháng.", "sentenceEn": "Giraffe has a long neck.", "sentenceEs": "La jirafa tiene el cuello largo.", "radicalHint": "鹿 Radical"},
  {"id": 17, "hanzi": "斑马", "pinyin": "bān mǎ", "tones": [1, 3], "en": "Zebra", "es": "Cebra", "emoji": "🦓", "category": "Animals", "level": "intermediate", "sentenceZh": "斑马身上的黑白条纹。", "sentencePinyin": "Bān mǎ shēn shàng de wén.", "sentenceEn": "Zebra has black and white stripes.", "sentenceEs": "La cebra tiene rayas blancas y negras.", "radicalHint": "马 Radical"},
  {"id": 18, "hanzi": "蝴蝶", "pinyin": "hú dié", "tones": [2, 2], "en": "Butterfly", "es": "Mariposa", "emoji": "🦋", "category": "Animals", "level": "intermediate", "sentenceZh": "蝴蝶在花丛中飞舞。", "sentencePinyin": "Hú dié zài huā cóng zhōng fēi.", "sentenceEn": "Butterfly dances in flowers.", "sentenceEs": "La mariposa vuela entre flores.", "radicalHint": "虫 Radical"},
  {"id": 19, "hanzi": "蜜蜂", "pinyin": "mì fēng", "tones": [4, 1], "en": "Bee", "es": "Abeja", "emoji": "🐝", "category": "Animals", "level": "intermediate", "sentenceZh": "蜜蜂采蜜勤劳忙。", "sentencePinyin": "Mì fēng cǎi mì qín láo.", "sentenceEn": "Bees gather honey hard.", "sentenceEs": "Las abejas recogen miel.", "radicalHint": "虫 Radical"},
  {"id": 20, "hanzi": "恐龙", "pinyin": "kǒng lóng", "tones": [3, 2], "en": "Dinosaur", "es": "Dinosaurio", "emoji": "🦕", "category": "Animals", "level": "advanced", "sentenceZh": "巨大的恐龙古代生活。", "sentencePinyin": "Jù dà de kǒng lóng.", "sentenceEn": "Giant dinosaurs lived in past.", "sentenceEs": "Los dinosaurios gigantes vivieron antes.", "radicalHint": "龙 Radical"},
  {"id": 21, "hanzi": "狐狸", "pinyin": "hú li", "tones": [2, 0], "en": "Fox", "es": "Zorro", "emoji": "🦊", "category": "Animals", "level": "intermediate", "sentenceZh": "聪明狡猾的小狐狸。", "sentencePinyin": "Cōng ming de xiǎo hú li.", "sentenceEn": "Clever little fox.", "sentenceEs": "El zorro inteligente.", "radicalHint": "犭 Radical"},
  {"id": 22, "hanzi": "考拉", "pinyin": "kǎo lā", "tones": [3, 1], "en": "Koala", "es": "Coala", "emoji": "🐨", "category": "Animals", "level": "intermediate", "sentenceZh": "考拉抱在树干上睡觉。", "sentencePinyin": "Kǎo lā bào zài shù shàng.", "sentenceEn": "Koala sleeps on tree trunk.", "sentenceEs": "El coala duerme en el árbol.", "radicalHint": "扌 Radical"},
  {"id": 23, "hanzi": "袋鼠", "pinyin": "dài shǔ", "tones": [4, 3], "en": "Kangaroo", "es": "Canguro", "emoji": "🦘", "category": "Animals", "level": "intermediate", "sentenceZh": "袋鼠跳得非常高。", "sentencePinyin": "Dài shǔ tiào de fēi cháng gāo.", "sentenceEn": "Kangaroo jumps very high.", "sentenceEs": "El canguro salta muy alto.", "radicalHint": "鼠 Radical"},
  {"id": 24, "hanzi": "乌龟", "pinyin": "wū guī", "tones": [1, 1], "en": "Turtle", "es": "Tortuga", "emoji": "🐢", "category": "Animals", "level": "beginner", "sentenceZh": "乌龟爬得很慢很稳。", "sentencePinyin": "Wū guī pá de hěn màn.", "sentenceEn": "Turtle crawls slowly.", "sentenceEs": "La tortuga camina despacio.", "radicalHint": "龟 Pictogram"},
  {"id": 25, "hanzi": "青蛙", "pinyin": "qīng wā", "tones": [1, 1], "en": "Frog", "es": "Rana", "emoji": "🐸", "category": "Animals", "level": "beginner", "sentenceZh": "小青蛙在荷叶上呱呱叫。", "sentencePinyin": "Xiǎo qīng wā zài hé yè shàng.", "sentenceEn": "Frog croaks on lotus leaf.", "sentenceEs": "La rana canta en la hoja.", "radicalHint": "虫 Radical"},
  {"id": 26, "hanzi": "海豚", "pinyin": "hǎi tún", "tones": [3, 2], "en": "Dolphin", "es": "Delfín", "emoji": "🐬", "category": "Animals", "level": "intermediate", "sentenceZh": "海豚在海里跃出水面。", "sentencePinyin": "Hǎi tún zài hǎi lǐ yuè chū.", "sentenceEn": "Dolphin jumps out of sea.", "sentenceEs": "El delfín salta en el mar.", "radicalHint": "氵 Radical"},
  {"id": 27, "hanzi": "鲨鱼", "pinyin": "shā yú", "tones": [1, 2], "en": "Shark", "es": "Tiburón", "emoji": "🦈", "category": "Animals", "level": "advanced", "sentenceZh": "鲨鱼在深海里游泳。", "sentencePinyin": "Shā yú zài shēn hǎi lǐ.", "sentenceEn": "Shark swims in deep sea.", "sentenceEs": "El tiburón nada en el mar profundo.", "radicalHint": "鱼 Radical"},
  {"id": 28, "hanzi": "章鱼", "pinyin": "zhāng yú", "tones": [1, 2], "en": "Octopus", "es": "Pulpo", "emoji": "🐙", "category": "Animals", "level": "intermediate", "sentenceZh": "章鱼有八条长触手。", "sentencePinyin": "Zhāng yú yǒu bā tiáo chù shǒu.", "sentenceEn": "Octopus has 8 tentacles.", "sentenceEs": "El pulpo tiene 8 tentáculos.", "radicalHint": "鱼 Radical"},
  {"id": 29, "hanzi": "螃蟹", "pinyin": "páng xiè", "tones": [2, 4], "en": "Crab", "es": "Cangrejo", "emoji": "🦀", "category": "Animals", "level": "intermediate", "sentenceZh": "螃蟹横着横着走。", "sentencePinyin": "Páng xiè héng zhe zǒu.", "sentenceEn": "Crabs walk sideways.", "sentenceEs": "El cangrejo camina de lado.", "radicalHint": "虫 Radical"},
  {"id": 30, "hanzi": "孔雀", "pinyin": "kǒng què", "tones": [3, 4], "en": "Peacock", "es": "Pavo Real", "emoji": "🦚", "category": "Animals", "level": "advanced", "sentenceZh": "孔雀开屏真漂亮。", "sentencePinyin": "Kǒng què kāi píng piào liang.", "sentenceEn": "Peacock spreads beautiful tail.", "sentenceEs": "El pavo real abre su cola.", "radicalHint": "鸟 Radical"},
  {"id": 31, "hanzi": "天鹅", "pinyin": "tiān é", "tones": [1, 2], "en": "Swan", "es": "Cisne", "emoji": "🦢", "category": "Animals", "level": "intermediate", "sentenceZh": "天鹅在湖面上优雅游泳。", "sentencePinyin": "Tiān é zài hú miàn shàng.", "sentenceEn": "Swan swims gracefully on lake.", "sentenceEs": "El cisne nada con gracia.", "radicalHint": "鸟 Radical"},
  {"id": 32, "hanzi": "鹦鹉", "pinyin": "yīng wǔ", "tones": [1, 3], "en": "Parrot", "es": "Loro", "emoji": "🦜", "category": "Animals", "level": "intermediate", "sentenceZh": "鹦鹉学人类说话。", "sentencePinyin": "Yīng wǔ xué rén lèi shuō huà.", "sentenceEn": "Parrot mimics human speech.", "sentenceEs": "El loro imita las palabras.", "radicalHint": "鸟 Radical"},
  {"id": 33, "hanzi": "猫头鹰", "pinyin": "māo tóu yīng", "tones": [1, 2, 1], "en": "Owl", "es": "Búho", "emoji": "🦉", "category": "Animals", "level": "advanced", "sentenceZh": "猫头鹰夜晚看得很清。", "sentencePinyin": "Māo tóu yīng yè wǎn kàn de qīng.", "sentenceEn": "Owl sees clearly at night.", "sentenceEs": "El búho ve claro de noche.", "radicalHint": "鸟 Radical"},
  {"id": 34, "hanzi": "松鼠", "pinyin": "sōng shǔ", "tones": [1, 3], "en": "Squirrel", "es": "Ardilla", "emoji": "🐿️", "category": "Animals", "level": "intermediate", "sentenceZh": "松鼠在树上吃坚果。", "sentencePinyin": "Sōng shǔ zài shù shàng chī jiān guǒ.", "sentenceEn": "Squirrel eats nuts on tree.", "sentenceEs": "La ardilla come nueces.", "radicalHint": "鼠 Radical"},
  {"id": 35, "hanzi": "刺猬", "pinyin": "cì wei", "tones": [4, 0], "en": "Hedgehog", "es": "Erizo", "emoji": "🦔", "category": "Animals", "level": "advanced", "sentenceZh": "小刺猬背上有许多刺。", "sentencePinyin": "Xiǎo cì wei shēn shàng yǒu cì.", "sentenceEn": "Hedgehog has spines on back.", "sentenceEs": "El erizo tiene púas.", "radicalHint": "朿 Radical"},
  {"id": 36, "hanzi": "蜗牛", "pinyin": "wō niú", "tones": [1, 2], "en": "Snail", "es": "Caracol", "emoji": "🐌", "category": "Animals", "level": "beginner", "sentenceZh": "蜗牛背着自己的小房子。", "sentencePinyin": "Wō niú bèi zhe fáng zi.", "sentenceEn": "Snail carries its little house.", "sentenceEs": "El caracol lleva su casita.", "radicalHint": "虫 Radical"},
  {"id": 37, "hanzi": "蚂蚁", "pinyin": "mǎ yǐ", "tones": [3, 3], "en": "Ant", "es": "Hormiga", "emoji": "🐜", "category": "Animals", "level": "beginner", "sentenceZh": "小蚂蚁团结搬食物。", "sentencePinyin": "Xiǎo mǎ yǐ tuán jié bān shí wù.", "sentenceEn": "Ants work together for food.", "sentenceEs": "Las hormigas trabajan juntas.", "radicalHint": "虫 Radical"},
  {"id": 38, "hanzi": "瓢虫", "pinyin": "piáo chóng", "tones": [2, 2], "en": "Ladybug", "es": "Mariquita", "emoji": "🐞", "category": "Animals", "level": "intermediate", "sentenceZh": "七星瓢虫保护花草。", "sentencePinyin": "Qī xīng piáo chóng bǎo hù.", "sentenceEn": "Ladybug protects plants.", "sentenceEs": "La mariquita cuida las plantas.", "radicalHint": "虫 Radical"},
  {"id": 39, "hanzi": "蜻蜓", "pinyin": "qīng tíng", "tones": [1, 2], "en": "Dragonfly", "es": "Libélula", "emoji": "🦗", "category": "Animals", "level": "intermediate", "sentenceZh": "蜻蜓点水飞得低。", "sentencePinyin": "Qīng tíng diǎn shuǐ fēi.", "sentenceEn": "Dragonfly skims over water.", "sentenceEs": "La libélula vuela bajo.", "radicalHint": "虫 Radical"},
  {"id": 40, "hanzi": "骆驼", "pinyin": "luò tuó", "tones": [4, 2], "en": "Camel", "es": "Camello", "emoji": "🐪", "category": "Animals", "level": "advanced", "sentenceZh": "骆驼在沙漠里走得远。", "sentencePinyin": "Luò tuó zài shā mò lǐ.", "sentenceEn": "Camel walks far in desert.", "sentenceEs": "El camello camina en el desierto.", "radicalHint": "马 Radical"},
  {"id": 41, "hanzi": "香蕉", "pinyin": "xiāng jiāo", "tones": [1, 1], "en": "Banana", "es": "Plátano", "emoji": "🍌", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃香蕉。", "sentencePinyin": "wǒ xǐ huān chī xiāng jiāo", "sentenceEn": "I like to eat banana.", "sentenceEs": "Me gusta comer plátano.", "radicalHint": "Food vocabulary"},
  {"id": 42, "hanzi": "西瓜", "pinyin": "xī guā", "tones": [1, 1], "en": "Watermelon", "es": "Sandía", "emoji": "🍉", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃西瓜。", "sentencePinyin": "wǒ xǐ huān chī xī guā", "sentenceEn": "I like to eat watermelon.", "sentenceEs": "Me gusta comer sandía.", "radicalHint": "Food vocabulary"},
  {"id": 43, "hanzi": "牛奶", "pinyin": "niú nǎi", "tones": [2, 3], "en": "Milk", "es": "Leche", "emoji": "🥛", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢喝牛奶。", "sentencePinyin": "wǒ xǐ huān hē niú nǎi", "sentenceEn": "I like to drink milk.", "sentenceEs": "Me gusta tomar leche.", "radicalHint": "Food vocabulary"},
  {"id": 44, "hanzi": "面包", "pinyin": "miàn bāo", "tones": [4, 1], "en": "Bread", "es": "Pan", "emoji": "🍞", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃面包。", "sentencePinyin": "wǒ xǐ huān chī miàn bāo", "sentenceEn": "I like to eat bread.", "sentenceEs": "Me gusta comer pan.", "radicalHint": "Food vocabulary"},
  {"id": 45, "hanzi": "鸡蛋", "pinyin": "jī dàn", "tones": [1, 4], "en": "Egg", "es": "Huevo", "emoji": "🥚", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃鸡蛋。", "sentencePinyin": "wǒ xǐ huān chī jī dàn", "sentenceEn": "I like to eat egg.", "sentenceEs": "Me gusta comer huevo.", "radicalHint": "Food vocabulary"},
  {"id": 46, "hanzi": "米饭", "pinyin": "mǐ fàn", "tones": [3, 4], "en": "Rice", "es": "Arroz", "emoji": "🍚", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃米饭。", "sentencePinyin": "wǒ xǐ huān chī mǐ fàn", "sentenceEn": "I like to eat rice.", "sentenceEs": "Me gusta comer arroz.", "radicalHint": "Food vocabulary"},
  {"id": 47, "hanzi": "果汁", "pinyin": "guǒ zhī", "tones": [3, 1], "en": "Juice", "es": "Jugo", "emoji": "🧃", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢喝果汁。", "sentencePinyin": "wǒ xǐ huān hē guǒ zhī", "sentenceEn": "I like to drink juice.", "sentenceEs": "Me gusta tomar jugo.", "radicalHint": "Food vocabulary"},
  {"id": 48, "hanzi": "冰淇淋", "pinyin": "bīng qí lín", "tones": [1, 2, 2], "en": "Ice Cream", "es": "Helado", "emoji": "🍦", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃冰淇淋。", "sentencePinyin": "wǒ xǐ huān chī bīng qí lín", "sentenceEn": "I like to eat ice cream.", "sentenceEs": "Me gusta comer helado.", "radicalHint": "Food vocabulary"},
  {"id": 49, "hanzi": "蛋糕", "pinyin": "dàn gāo", "tones": [4, 1], "en": "Cake", "es": "Pastel", "emoji": "🎂", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃蛋糕。", "sentencePinyin": "wǒ xǐ huān chī dàn gāo", "sentenceEn": "I like to eat cake.", "sentenceEs": "Me gusta comer pastel.", "radicalHint": "Food vocabulary"},
  {"id": 50, "hanzi": "巧克力", "pinyin": "qiǎo kè lì", "tones": [3, 4, 4], "en": "Chocolate", "es": "Chocolate", "emoji": "🍫", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃巧克力。", "sentencePinyin": "wǒ xǐ huān chī qiǎo kè lì", "sentenceEn": "I like to eat chocolate.", "sentenceEs": "Me gusta comer chocolate.", "radicalHint": "Food vocabulary"},
  {"id": 51, "hanzi": "草莓", "pinyin": "cǎo méi", "tones": [3, 2], "en": "Strawberry", "es": "Fresa", "emoji": "🍓", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃草莓。", "sentencePinyin": "wǒ xǐ huān chī cǎo méi", "sentenceEn": "I like to eat strawberry.", "sentenceEs": "Me gusta comer fresa.", "radicalHint": "Food vocabulary"},
  {"id": 52, "hanzi": "葡萄", "pinyin": "pú táo", "tones": [2, 2], "en": "Grape", "es": "Uva", "emoji": "🍇", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃葡萄。", "sentencePinyin": "wǒ xǐ huān chī pú táo", "sentenceEn": "I like to eat grape.", "sentenceEs": "Me gusta comer uva.", "radicalHint": "Food vocabulary"},
  {"id": 53, "hanzi": "披萨", "pinyin": "pī sà", "tones": [1, 4], "en": "Pizza", "es": "Pizza", "emoji": "🍕", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃披萨。", "sentencePinyin": "wǒ xǐ huān chī pī sà", "sentenceEn": "I like to eat pizza.", "sentenceEs": "Me gusta comer pizza.", "radicalHint": "Food vocabulary"},
  {"id": 54, "hanzi": "水饺", "pinyin": "shuǐ jiǎo", "tones": [3, 3], "en": "Dumpling", "es": "Empanadilla", "emoji": "🥟", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃水饺。", "sentencePinyin": "wǒ xǐ huān chī shuǐ jiǎo", "sentenceEn": "I like to eat dumpling.", "sentenceEs": "Me gusta comer empanadilla.", "radicalHint": "Food vocabulary"},
  {"id": 55, "hanzi": "汉堡", "pinyin": "hàn bǎo", "tones": [4, 3], "en": "Hamburger", "es": "Hamburguesa", "emoji": "🍔", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃汉堡。", "sentencePinyin": "wǒ xǐ huān chī hàn bǎo", "sentenceEn": "I like to eat hamburger.", "sentenceEs": "Me gusta comer hamburguesa.", "radicalHint": "Food vocabulary"},
  {"id": 56, "hanzi": "苹果汁", "pinyin": "píng guǒ zhī", "tones": [2, 3, 1], "en": "Apple Juice", "es": "Jugo de Manzana", "emoji": "🧃", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢喝苹果汁。", "sentencePinyin": "wǒ xǐ huān hē píng guǒ zhī", "sentenceEn": "I like to drink apple juice.", "sentenceEs": "Me gusta tomar jugo de manzana.", "radicalHint": "Food vocabulary"},
  {"id": 57, "hanzi": "桃子", "pinyin": "táo zi", "tones": [2, 0], "en": "Peach", "es": "Melocotón", "emoji": "🍑", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃桃子。", "sentencePinyin": "wǒ xǐ huān chī táo zi", "sentenceEn": "I like to eat peach.", "sentenceEs": "Me gusta comer melocotón.", "radicalHint": "Food vocabulary"},
  {"id": 58, "hanzi": "菠萝", "pinyin": "bō luó", "tones": [1, 2], "en": "Pineapple", "es": "Piña", "emoji": "🍍", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃菠萝。", "sentencePinyin": "wǒ xǐ huān chī bō luó", "sentenceEn": "I like to eat pineapple.", "sentenceEs": "Me gusta comer piña.", "radicalHint": "Food vocabulary"},
  {"id": 59, "hanzi": "鸭梨", "pinyin": "yā lí", "tones": [1, 2], "en": "Pear", "es": "Pera", "emoji": "🍐", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃鸭梨。", "sentencePinyin": "wǒ xǐ huān chī yā lí", "sentenceEn": "I like to eat pear.", "sentenceEs": "Me gusta comer pera.", "radicalHint": "Food vocabulary"},
  {"id": 60, "hanzi": "樱桃", "pinyin": "yīng táo", "tones": [1, 2], "en": "Cherry", "es": "Cereza", "emoji": "🍒", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃樱桃。", "sentencePinyin": "wǒ xǐ huān chī yīng táo", "sentenceEn": "I like to eat cherry.", "sentenceEs": "Me gusta comer cereza.", "radicalHint": "Food vocabulary"},
  {"id": 61, "hanzi": "柠檬", "pinyin": "níng méng", "tones": [2, 2], "en": "Lemon", "es": "Limón", "emoji": "🍋", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃柠檬。", "sentencePinyin": "wǒ xǐ huān chī níng méng", "sentenceEn": "I like to eat lemon.", "sentenceEs": "Me gusta comer limón.", "radicalHint": "Food vocabulary"},
  {"id": 62, "hanzi": "橙子", "pinyin": "chéng zi", "tones": [2, 0], "en": "Orange", "es": "Naranja", "emoji": "🍊", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃橙子。", "sentencePinyin": "wǒ xǐ huān chī chéng zi", "sentenceEn": "I like to eat orange.", "sentenceEs": "Me gusta comer naranja.", "radicalHint": "Food vocabulary"},
  {"id": 63, "hanzi": "猕猴桃", "pinyin": "mí hóu táo", "tones": [2, 2, 2], "en": "Kiwi", "es": "Kiwi", "emoji": "🥝", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃猕猴桃。", "sentencePinyin": "wǒ xǐ huān chī mí hóu táo", "sentenceEn": "I like to eat kiwi.", "sentenceEs": "Me gusta comer kiwi.", "radicalHint": "Food vocabulary"},
  {"id": 64, "hanzi": "椰子", "pinyin": "yē zi", "tones": [1, 0], "en": "Coconut", "es": "Coco", "emoji": "🥥", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃椰子。", "sentencePinyin": "wǒ xǐ huān chī yē zi", "sentenceEn": "I like to eat coconut.", "sentenceEs": "Me gusta comer coco.", "radicalHint": "Food vocabulary"},
  {"id": 65, "hanzi": "胡萝卜", "pinyin": "hú luó bo", "tones": [2, 2, 0], "en": "Carrot", "es": "Zanahoria", "emoji": "🥕", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃胡萝卜。", "sentencePinyin": "wǒ xǐ huān chī hú luó bo", "sentenceEn": "I like to eat carrot.", "sentenceEs": "Me gusta comer zanahoria.", "radicalHint": "Food vocabulary"},
  {"id": 66, "hanzi": "玉米", "pinyin": "yù mǐ", "tones": [4, 3], "en": "Corn", "es": "Maíz", "emoji": "🌽", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃玉米。", "sentencePinyin": "wǒ xǐ huān chī yù mǐ", "sentenceEn": "I like to eat corn.", "sentenceEs": "Me gusta comer maíz.", "radicalHint": "Food vocabulary"},
  {"id": 67, "hanzi": "西兰花", "pinyin": "xī lán huā", "tones": [1, 2, 1], "en": "Broccoli", "es": "Brócoli", "emoji": "🥦", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃西兰花。", "sentencePinyin": "wǒ xǐ huān chī xī lán huā", "sentenceEn": "I like to eat broccoli.", "sentenceEs": "Me gusta comer brócoli.", "radicalHint": "Food vocabulary"},
  {"id": 68, "hanzi": "西红柿", "pinyin": "xī hóng shì", "tones": [1, 2, 4], "en": "Tomato", "es": "Tomate", "emoji": "🍅", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃西红柿。", "sentencePinyin": "wǒ xǐ huān chī xī hóng shì", "sentenceEn": "I like to eat tomato.", "sentenceEs": "Me gusta comer tomate.", "radicalHint": "Food vocabulary"},
  {"id": 69, "hanzi": "黄瓜", "pinyin": "huáng guā", "tones": [2, 1], "en": "Cucumber", "es": "Pepino", "emoji": "🥒", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃黄瓜。", "sentencePinyin": "wǒ xǐ huān chī huáng guā", "sentenceEn": "I like to eat cucumber.", "sentenceEs": "Me gusta comer pepino.", "radicalHint": "Food vocabulary"},
  {"id": 70, "hanzi": "土豆", "pinyin": "tǔ dòu", "tones": [3, 4], "en": "Potato", "es": "Patata", "emoji": "🥔", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃土豆。", "sentencePinyin": "wǒ xǐ huān chī tǔ dòu", "sentenceEn": "I like to eat potato.", "sentenceEs": "Me gusta comer patata.", "radicalHint": "Food vocabulary"},
  {"id": 71, "hanzi": "蘑菇", "pinyin": "mó gū", "tones": [2, 1], "en": "Mushroom", "es": "Seta", "emoji": "🍄", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃蘑菇。", "sentencePinyin": "wǒ xǐ huān chī mó gū", "sentenceEn": "I like to eat mushroom.", "sentenceEs": "Me gusta comer seta.", "radicalHint": "Food vocabulary"},
  {"id": 72, "hanzi": "面条", "pinyin": "miàn tiáo", "tones": [4, 2], "en": "Noodle", "es": "Fideos", "emoji": "🍜", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃面条。", "sentencePinyin": "wǒ xǐ huān chī miàn tiáo", "sentenceEn": "I like to eat noodle.", "sentenceEs": "Me gusta comer fideos.", "radicalHint": "Food vocabulary"},
  {"id": 73, "hanzi": "汤圆", "pinyin": "tāng yuán", "tones": [1, 2], "en": "Rice Ball", "es": "Bola de Arroz", "emoji": "🍡", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃汤圆。", "sentencePinyin": "wǒ xǐ huān chī tāng yuán", "sentenceEn": "I like to eat rice ball.", "sentenceEs": "Me gusta comer bola de arroz.", "radicalHint": "Food vocabulary"},
  {"id": 74, "hanzi": "包子", "pinyin": "bāo zi", "tones": [1, 0], "en": "Steamed Bun", "es": "Pan al Vapor", "emoji": "🥟", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃包子。", "sentencePinyin": "wǒ xǐ huān chī bāo zi", "sentenceEn": "I like to eat steamed bun.", "sentenceEs": "Me gusta comer pan al vapor.", "radicalHint": "Food vocabulary"},
  {"id": 75, "hanzi": "饼干", "pinyin": "bǐng gàn", "tones": [3, 4], "en": "Cookie", "es": "Galleta", "emoji": "🍪", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃饼干。", "sentencePinyin": "wǒ xǐ huān chī bǐng gàn", "sentenceEn": "I like to eat cookie.", "sentenceEs": "Me gusta comer galleta.", "radicalHint": "Food vocabulary"},
  {"id": 76, "hanzi": "糖果", "pinyin": "táng guǒ", "tones": [2, 3], "en": "Candy", "es": "Caramelo", "emoji": "🍬", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃糖果。", "sentencePinyin": "wǒ xǐ huān chī táng guǒ", "sentenceEn": "I like to eat candy.", "sentenceEs": "Me gusta comer caramelo.", "radicalHint": "Food vocabulary"},
  {"id": 77, "hanzi": "甜甜圈", "pinyin": "tián tián quān", "tones": [2, 2, 1], "en": "Donut", "es": "Dona", "emoji": "🍩", "category": "Food", "level": "beginner", "sentenceZh": "我喜欢吃甜甜圈。", "sentencePinyin": "wǒ xǐ huān chī tián tián quān", "sentenceEn": "I like to eat donut.", "sentenceEs": "Me gusta comer dona.", "radicalHint": "Food vocabulary"},
  {"id": 78, "hanzi": "煎饼", "pinyin": "jiān bǐng", "tones": [1, 3], "en": "Pancake", "es": "Panqueque", "emoji": "🥞", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃煎饼。", "sentencePinyin": "wǒ xǐ huān chī jiān bǐng", "sentenceEn": "I like to eat pancake.", "sentenceEs": "Me gusta comer panqueque.", "radicalHint": "Food vocabulary"},
  {"id": 79, "hanzi": "薯条", "pinyin": "shǔ tiáo", "tones": [3, 2], "en": "Fries", "es": "Patatas Fritas", "emoji": "🍟", "category": "Food", "level": "advanced", "sentenceZh": "我喜欢吃薯条。", "sentencePinyin": "wǒ xǐ huān chī shǔ tiáo", "sentenceEn": "I like to eat fries.", "sentenceEs": "Me gusta comer patatas fritas.", "radicalHint": "Food vocabulary"},
  {"id": 80, "hanzi": "爆米花", "pinyin": "bào mǐ huā", "tones": [4, 3, 1], "en": "Popcorn", "es": "Palomitas", "emoji": "🍿", "category": "Food", "level": "intermediate", "sentenceZh": "我喜欢吃爆米花。", "sentencePinyin": "wǒ xǐ huān chī bào mǐ huā", "sentenceEn": "I like to eat popcorn.", "sentenceEs": "Me gusta comer palomitas.", "radicalHint": "Food vocabulary"},
  {"id": 81, "hanzi": "太阳", "pinyin": "tài yáng", "tones": [4, 2], "en": "Sun", "es": "Sol", "emoji": "☀️", "category": "Nature", "level": "beginner", "sentenceZh": "太阳的景色真美丽！", "sentencePinyin": "tài yáng de jǐng sè zhēn měi lì", "sentenceEn": "The sun scenery is beautiful!", "sentenceEs": "¡El paisaje de sol es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 82, "hanzi": "月亮", "pinyin": "yuè liàng", "tones": [4, 4], "en": "Moon", "es": "Luna", "emoji": "🌙", "category": "Nature", "level": "intermediate", "sentenceZh": "月亮的景色真美丽！", "sentencePinyin": "yuè liàng de jǐng sè zhēn měi lì", "sentenceEn": "The moon scenery is beautiful!", "sentenceEs": "¡El paisaje de luna es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 83, "hanzi": "星星", "pinyin": "xīng xīng", "tones": [1, 1], "en": "Star", "es": "Estrella", "emoji": "⭐", "category": "Nature", "level": "advanced", "sentenceZh": "星星的景色真美丽！", "sentencePinyin": "xīng xīng de jǐng sè zhēn měi lì", "sentenceEn": "The star scenery is beautiful!", "sentenceEs": "¡El paisaje de estrella es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 84, "hanzi": "白云", "pinyin": "bái yún", "tones": [2, 2], "en": "Cloud", "es": "Nube", "emoji": "☁️", "category": "Nature", "level": "intermediate", "sentenceZh": "白云的景色真美丽！", "sentencePinyin": "bái yún de jǐng sè zhēn měi lì", "sentenceEn": "The cloud scenery is beautiful!", "sentenceEs": "¡El paisaje de nube es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 85, "hanzi": "下雨", "pinyin": "xià yǔ", "tones": [4, 3], "en": "Rain", "es": "Lluvia", "emoji": "🌧️", "category": "Nature", "level": "beginner", "sentenceZh": "下雨的景色真美丽！", "sentencePinyin": "xià yǔ de jǐng sè zhēn měi lì", "sentenceEn": "The rain scenery is beautiful!", "sentenceEs": "¡El paisaje de lluvia es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 86, "hanzi": "雪人", "pinyin": "xuě rén", "tones": [3, 2], "en": "Snowman", "es": "Muñeco de Nieve", "emoji": "☃️", "category": "Nature", "level": "advanced", "sentenceZh": "雪人的景色真美丽！", "sentencePinyin": "xuě rén de jǐng sè zhēn měi lì", "sentenceEn": "The snowman scenery is beautiful!", "sentenceEs": "¡El paisaje de muñeco de nieve es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 87, "hanzi": "天空", "pinyin": "tiān kōng", "tones": [1, 1], "en": "Sky", "es": "Cielo", "emoji": "🌌", "category": "Nature", "level": "beginner", "sentenceZh": "天空的景色真美丽！", "sentencePinyin": "tiān kōng de jǐng sè zhēn měi lì", "sentenceEn": "The sky scenery is beautiful!", "sentenceEs": "¡El paisaje de cielo es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 88, "hanzi": "高山", "pinyin": "gāo shān", "tones": [1, 1], "en": "High Mountain", "es": "Montaña", "emoji": "⛰️", "category": "Nature", "level": "intermediate", "sentenceZh": "高山的景色真美丽！", "sentencePinyin": "gāo shān de jǐng sè zhēn měi lì", "sentenceEn": "The mountain scenery is beautiful!", "sentenceEs": "¡El paisaje de montaña es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 89, "hanzi": "鲜花", "pinyin": "xiān huā", "tones": [1, 1], "en": "Flower", "es": "Flor", "emoji": "🌸", "category": "Nature", "level": "advanced", "sentenceZh": "鲜花的景色真美丽！", "sentencePinyin": "xiān huā de jǐng sè zhēn měi lì", "sentenceEn": "The flower scenery is beautiful!", "sentenceEs": "¡El paisaje de flor es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 90, "hanzi": "大树", "pinyin": "dà shù", "tones": [4, 4], "en": "Big Tree", "es": "Árbol", "emoji": "🌳", "category": "Nature", "level": "intermediate", "sentenceZh": "大树的景色真美丽！", "sentencePinyin": "dà shù de jǐng sè zhēn měi lì", "sentenceEn": "The tree scenery is beautiful!", "sentenceEs": "¡El paisaje de árbol es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 91, "hanzi": "小河", "pinyin": "xiǎo hé", "tones": [3, 2], "en": "Small River", "es": "Río", "emoji": "🏞️", "category": "Nature", "level": "beginner", "sentenceZh": "小河的景色真美丽！", "sentencePinyin": "xiǎo hé de jǐng sè zhēn měi lì", "sentenceEn": "The river scenery is beautiful!", "sentenceEs": "¡El paisaje de río es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 92, "hanzi": "大海", "pinyin": "dà hǎi", "tones": [4, 3], "en": "Ocean", "es": "Mar", "emoji": "🌊", "category": "Nature", "level": "advanced", "sentenceZh": "大海的景色真美丽！", "sentencePinyin": "dà hǎi de jǐng sè zhēn měi lì", "sentenceEn": "The ocean scenery is beautiful!", "sentenceEs": "¡El paisaje de mar es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 93, "hanzi": "刮风", "pinyin": "guā fēng", "tones": [1, 1], "en": "Wind", "es": "Viento", "emoji": "💨", "category": "Nature", "level": "beginner", "sentenceZh": "刮风的景色真美丽！", "sentencePinyin": "guā fēng de jǐng sè zhēn měi lì", "sentenceEn": "The wind scenery is beautiful!", "sentenceEs": "¡El paisaje de viento es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 94, "hanzi": "彩虹", "pinyin": "cǎi hóng", "tones": [3, 2], "en": "Rainbow", "es": "Arcoíris", "emoji": "🌈", "category": "Nature", "level": "intermediate", "sentenceZh": "彩虹的景色真美丽！", "sentencePinyin": "cǎi hóng de jǐng sè zhēn měi lì", "sentenceEn": "The rainbow scenery is beautiful!", "sentenceEs": "¡El paisaje de arcoíris es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 95, "hanzi": "地球", "pinyin": "dì qiú", "tones": [4, 2], "en": "Earth", "es": "Tierra", "emoji": "🌍", "category": "Nature", "level": "advanced", "sentenceZh": "地球的景色真美丽！", "sentencePinyin": "dì qiú de jǐng sè zhēn měi lì", "sentenceEn": "The earth scenery is beautiful!", "sentenceEs": "¡El paisaje de tierra es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 96, "hanzi": "宇宙", "pinyin": "yǔ zhòu", "tones": [3, 4], "en": "Universe", "es": "Universo", "emoji": "🌌", "category": "Nature", "level": "intermediate", "sentenceZh": "宇宙的景色真美丽！", "sentencePinyin": "yǔ zhòu de jǐng sè zhēn měi lì", "sentenceEn": "The universe scenery is beautiful!", "sentenceEs": "¡El paisaje de universo es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 97, "hanzi": "流星", "pinyin": "liú xīng", "tones": [2, 1], "en": "Shooting Star", "es": "Estrella Fugaz", "emoji": "🌠", "category": "Nature", "level": "beginner", "sentenceZh": "流星的景色真美丽！", "sentencePinyin": "liú xīng de jǐng sè zhēn měi lì", "sentenceEn": "The shooting star scenery is beautiful!", "sentenceEs": "¡El paisaje de estrella fugaz es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 98, "hanzi": "森林", "pinyin": "sēn lín", "tones": [1, 2], "en": "Forest", "es": "Bosque", "emoji": "🌲", "category": "Nature", "level": "advanced", "sentenceZh": "森林的景色真美丽！", "sentencePinyin": "sēn lín de jǐng sè zhēn měi lì", "sentenceEn": "The forest scenery is beautiful!", "sentenceEs": "¡El paisaje de bosque es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 99, "hanzi": "沙漠", "pinyin": "shā mò", "tones": [1, 4], "en": "Desert", "es": "Desierto", "emoji": "🏜️", "category": "Nature", "level": "beginner", "sentenceZh": "沙漠的景色真美丽！", "sentencePinyin": "shā mò de jǐng sè zhēn měi lì", "sentenceEn": "The desert scenery is beautiful!", "sentenceEs": "¡El paisaje de desierto es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 100, "hanzi": "瀑布", "pinyin": "pù bù", "tones": [4, 4], "en": "Waterfall", "es": "Cascada", "emoji": "🌊", "category": "Nature", "level": "intermediate", "sentenceZh": "瀑布的景色真美丽！", "sentencePinyin": "pù bù de jǐng sè zhēn měi lì", "sentenceEn": "The waterfall scenery is beautiful!", "sentenceEs": "¡El paisaje de cascada es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 101, "hanzi": "闪电", "pinyin": "shǎn diàn", "tones": [3, 4], "en": "Lightning", "es": "Rayo", "emoji": "⚡", "category": "Nature", "level": "advanced", "sentenceZh": "闪电的景色真美丽！", "sentencePinyin": "shǎn diàn de jǐng sè zhēn měi lì", "sentenceEn": "The lightning scenery is beautiful!", "sentenceEs": "¡El paisaje de rayo es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 102, "hanzi": "打雷", "pinyin": "dǎ léi", "tones": [3, 2], "en": "Thunder", "es": "Trueno", "emoji": "🌩️", "category": "Nature", "level": "intermediate", "sentenceZh": "打雷的景色真美丽！", "sentencePinyin": "dǎ léi de jǐng sè zhēn měi lì", "sentenceEn": "The thunder scenery is beautiful!", "sentenceEs": "¡El paisaje de trueno es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 103, "hanzi": "台风", "pinyin": "tái fēng", "tones": [2, 1], "en": "Typhoon", "es": "Tifón", "emoji": "🌀", "category": "Nature", "level": "beginner", "sentenceZh": "台风的景色真美丽！", "sentencePinyin": "tái fēng de jǐng sè zhēn měi lì", "sentenceEn": "The typhoon scenery is beautiful!", "sentenceEs": "¡El paisaje de tifón es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 104, "hanzi": "火山", "pinyin": "huǒ shān", "tones": [3, 1], "en": "Volcano", "es": "Volcán", "emoji": "🌋", "category": "Nature", "level": "advanced", "sentenceZh": "火山的景色真美丽！", "sentencePinyin": "huǒ shān de jǐng sè zhēn měi lì", "sentenceEn": "The volcano scenery is beautiful!", "sentenceEs": "¡El paisaje de volcán es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 105, "hanzi": "海滩", "pinyin": "hǎi tān", "tones": [3, 1], "en": "Beach", "es": "Playa", "emoji": "🏖️", "category": "Nature", "level": "beginner", "sentenceZh": "海滩的景色真美丽！", "sentencePinyin": "hǎi tān de jǐng sè zhēn měi lì", "sentenceEn": "The beach scenery is beautiful!", "sentenceEs": "¡El paisaje de playa es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 106, "hanzi": "绿洲", "pinyin": "lǜ zhōu", "tones": [4, 1], "en": "Oasis", "es": "Oasis", "emoji": "🏝️", "category": "Nature", "level": "intermediate", "sentenceZh": "绿洲的景色真美丽！", "sentencePinyin": "lǜ zhōu de jǐng sè zhēn měi lì", "sentenceEn": "The oasis scenery is beautiful!", "sentenceEs": "¡El paisaje de oasis es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 107, "hanzi": "草地", "pinyin": "cǎo dì", "tones": [3, 4], "en": "Grassland", "es": "Prado", "emoji": "🌱", "category": "Nature", "level": "advanced", "sentenceZh": "草地的景色真美丽！", "sentencePinyin": "cǎo dì de jǐng sè zhēn měi lì", "sentenceEn": "The grassland scenery is beautiful!", "sentenceEs": "¡El paisaje de prado es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 108, "hanzi": "竹林", "pinyin": "zhú lín", "tones": [2, 2], "en": "Bamboo Forest", "es": "Bosque de Bambú", "emoji": "🎋", "category": "Nature", "level": "intermediate", "sentenceZh": "竹林的景色真美丽！", "sentencePinyin": "zhú lín de jǐng sè zhēn měi lì", "sentenceEn": "The bamboo forest scenery is beautiful!", "sentenceEs": "¡El paisaje de bosque de bambú es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 109, "hanzi": "冰川", "pinyin": "bīng chuān", "tones": [1, 1], "en": "Glacier", "es": "Glaciar", "emoji": "🧊", "category": "Nature", "level": "beginner", "sentenceZh": "冰川的景色真美丽！", "sentencePinyin": "bīng chuān de jǐng sè zhēn měi lì", "sentenceEn": "The glacier scenery is beautiful!", "sentenceEs": "¡El paisaje de glaciar es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 110, "hanzi": "温泉", "pinyin": "wēn quán", "tones": [1, 2], "en": "Hot Spring", "es": "Aguas Termales", "emoji": "♨️", "category": "Nature", "level": "advanced", "sentenceZh": "温泉的景色真美丽！", "sentencePinyin": "wēn quán de jǐng sè zhēn měi lì", "sentenceEn": "The hot spring scenery is beautiful!", "sentenceEs": "¡El paisaje de aguas termales es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 111, "hanzi": "朝霞", "pinyin": "cháo xiá", "tones": [2, 2], "en": "Sunrise Glow", "es": "Amanecer", "emoji": "🌅", "category": "Nature", "level": "beginner", "sentenceZh": "朝霞的景色真美丽！", "sentencePinyin": "cháo xiá de jǐng sè zhēn měi lì", "sentenceEn": "The sunrise glow scenery is beautiful!", "sentenceEs": "¡El paisaje de amanecer es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 112, "hanzi": "夕阳", "pinyin": "xī yáng", "tones": [1, 2], "en": "Sunset", "es": "Atardecer", "emoji": "🌇", "category": "Nature", "level": "intermediate", "sentenceZh": "夕阳的景色真美丽！", "sentencePinyin": "xī yáng de jǐng sè zhēn měi lì", "sentenceEn": "The sunset scenery is beautiful!", "sentenceEs": "¡El paisaje de atardecer es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 113, "hanzi": "露水", "pinyin": "lù shuǐ", "tones": [4, 3], "en": "Dew", "es": "Rocío", "emoji": "💧", "category": "Nature", "level": "advanced", "sentenceZh": "露水的景色真美丽！", "sentencePinyin": "lù shuǐ de jǐng sè zhēn měi lì", "sentenceEn": "The dew scenery is beautiful!", "sentenceEs": "¡El paisaje de rocío es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 114, "hanzi": "霜冻", "pinyin": "shuāng dòng", "tones": [1, 4], "en": "Frost", "es": "Escarcha", "emoji": "❄️", "category": "Nature", "level": "intermediate", "sentenceZh": "霜冻的景色真美丽！", "sentencePinyin": "shuāng dòng de jǐng sè zhēn měi lì", "sentenceEn": "The frost scenery is beautiful!", "sentenceEs": "¡El paisaje de escarcha es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 115, "hanzi": "雾气", "pinyin": "wù qì", "tones": [4, 4], "en": "Fog", "es": "Niebla", "emoji": "🌫️", "category": "Nature", "level": "beginner", "sentenceZh": "雾气的景色真美丽！", "sentencePinyin": "wù qì de jǐng sè zhēn měi lì", "sentenceEn": "The fog scenery is beautiful!", "sentenceEs": "¡El paisaje de niebla es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 116, "hanzi": "小溪", "pinyin": "xiǎo xī", "tones": [3, 1], "en": "Stream", "es": "Arroyuelo", "emoji": "🏞️", "category": "Nature", "level": "advanced", "sentenceZh": "小溪的景色真美丽！", "sentencePinyin": "xiǎo xī de jǐng sè zhēn měi lì", "sentenceEn": "The stream scenery is beautiful!", "sentenceEs": "¡El paisaje de arroyuelo es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 117, "hanzi": "湖泊", "pinyin": "hú pō", "tones": [2, 1], "en": "Lake", "es": "Lago", "emoji": "🏞️", "category": "Nature", "level": "beginner", "sentenceZh": "湖泊的景色真美丽！", "sentencePinyin": "hú pō de jǐng sè zhēn měi lì", "sentenceEn": "The lake scenery is beautiful!", "sentenceEs": "¡El paisaje de lago es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 118, "hanzi": "岩石", "pinyin": "yán shí", "tones": [2, 2], "en": "Rock", "es": "Roca", "emoji": "🪨", "category": "Nature", "level": "intermediate", "sentenceZh": "岩石的景色真美丽！", "sentencePinyin": "yán shí de jǐng sè zhēn měi lì", "sentenceEn": "The rock scenery is beautiful!", "sentenceEs": "¡El paisaje de roca es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 119, "hanzi": "枫叶", "pinyin": "fēng yè", "tones": [1, 4], "en": "Maple Leaf", "es": "Hoja de Arce", "emoji": "🍁", "category": "Nature", "level": "advanced", "sentenceZh": "枫叶的景色真美丽！", "sentencePinyin": "fēng yè de jǐng sè zhēn měi lì", "sentenceEn": "The maple leaf scenery is beautiful!", "sentenceEs": "¡El paisaje de hoja de arce es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 120, "hanzi": "向日葵", "pinyin": "xiàng rì kuí", "tones": [4, 4, 2], "en": "Sunflower", "es": "Girasol", "emoji": "🌻", "category": "Nature", "level": "intermediate", "sentenceZh": "向日葵的景色真美丽！", "sentencePinyin": "xiàng rì kuí de jǐng sè zhēn měi lì", "sentenceEn": "The sunflower scenery is beautiful!", "sentenceEs": "¡El paisaje de girasol es hermoso!", "radicalHint": "Nature vocabulary"},
  {"id": 121, "hanzi": "火箭", "pinyin": "huǒ jiàn", "tones": [3, 4], "en": "Rocket", "es": "Cohete", "emoji": "🚀", "category": "Transport", "level": "beginner", "sentenceZh": "我坐火箭去上学。", "sentencePinyin": "wǒ zuò huǒ jiàn qù shàng xué", "sentenceEn": "I ride the rocket to school.", "sentenceEs": "Voy a la escuela en cohete.", "radicalHint": "Transport vocabulary"},
  {"id": 122, "hanzi": "汽车", "pinyin": "qì chē", "tones": [4, 1], "en": "Car", "es": "Coche", "emoji": "🚗", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐汽车去上学。", "sentencePinyin": "wǒ zuò qì chē qù shàng xué", "sentenceEn": "I ride the car to school.", "sentenceEs": "Voy a la escuela en coche.", "radicalHint": "Transport vocabulary"},
  {"id": 123, "hanzi": "飞机", "pinyin": "fēi jī", "tones": [1, 1], "en": "Airplane", "es": "Avión", "emoji": "✈️", "category": "Transport", "level": "advanced", "sentenceZh": "我坐飞机去上学。", "sentencePinyin": "wǒ zuò fēi jī qù shàng xué", "sentenceEn": "I ride the airplane to school.", "sentenceEs": "Voy a la escuela en avión.", "radicalHint": "Transport vocabulary"},
  {"id": 124, "hanzi": "自行车", "pinyin": "zì xíng chē", "tones": [4, 2, 1], "en": "Bicycle", "es": "Bicicleta", "emoji": "🚲", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐自行车去上学。", "sentencePinyin": "wǒ zuò zì xíng chē qù shàng xué", "sentenceEn": "I ride the bicycle to school.", "sentenceEs": "Voy a la escuela en bicicleta.", "radicalHint": "Transport vocabulary"},
  {"id": 125, "hanzi": "火车", "pinyin": "huǒ chē", "tones": [3, 1], "en": "Train", "es": "Tren", "emoji": "🚂", "category": "Transport", "level": "beginner", "sentenceZh": "我坐火车去上学。", "sentencePinyin": "wǒ zuò huǒ chē qù shàng xué", "sentenceEn": "I ride the train to school.", "sentenceEs": "Voy a la escuela en tren.", "radicalHint": "Transport vocabulary"},
  {"id": 126, "hanzi": "轮船", "pinyin": "lún chuán", "tones": [2, 2], "en": "Ship", "es": "Barco", "emoji": "🚢", "category": "Transport", "level": "advanced", "sentenceZh": "我坐轮船去上学。", "sentencePinyin": "wǒ zuò lún chuán qù shàng xué", "sentenceEn": "I ride the ship to school.", "sentenceEs": "Voy a la escuela en barco.", "radicalHint": "Transport vocabulary"},
  {"id": 127, "hanzi": "公交车", "pinyin": "gōng jiāo chē", "tones": [1, 1, 1], "en": "Bus", "es": "Autobús", "emoji": "🚌", "category": "Transport", "level": "beginner", "sentenceZh": "我坐公交车去上学。", "sentencePinyin": "wǒ zuò gōng jiāo chē qù shàng xué", "sentenceEn": "I ride the bus to school.", "sentenceEs": "Voy a la escuela en autobús.", "radicalHint": "Transport vocabulary"},
  {"id": 128, "hanzi": "直升机", "pinyin": "zhí shēng jī", "tones": [2, 1, 1], "en": "Helicopter", "es": "Helicóptero", "emoji": "🚁", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐直升机去上学。", "sentencePinyin": "wǒ zuò zhí shēng jī qù shàng xué", "sentenceEn": "I ride the helicopter to school.", "sentenceEs": "Voy a la escuela en helicóptero.", "radicalHint": "Transport vocabulary"},
  {"id": 129, "hanzi": "警车", "pinyin": "jǐng chē", "tones": [3, 1], "en": "Police Car", "es": "Coche de Policía", "emoji": "🚓", "category": "Transport", "level": "advanced", "sentenceZh": "我坐警车去上学。", "sentencePinyin": "wǒ zuò jǐng chē qù shàng xué", "sentenceEn": "I ride the police car to school.", "sentenceEs": "Voy a la escuela en coche de policía.", "radicalHint": "Transport vocabulary"},
  {"id": 130, "hanzi": "救护车", "pinyin": "jiù hù chē", "tones": [4, 4, 1], "en": "Ambulance", "es": "Ambulancia", "emoji": "🚑", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐救护车去上学。", "sentencePinyin": "wǒ zuò jiù hù chē qù shàng xué", "sentenceEn": "I ride the ambulance to school.", "sentenceEs": "Voy a la escuela en ambulancia.", "radicalHint": "Transport vocabulary"},
  {"id": 131, "hanzi": "消防车", "pinyin": "xiāo fáng chē", "tones": [1, 2, 1], "en": "Fire Truck", "es": "Camión de Bomberos", "emoji": "🚒", "category": "Transport", "level": "beginner", "sentenceZh": "我坐消防车去上学。", "sentencePinyin": "wǒ zuò xiāo fáng chē qù shàng xué", "sentenceEn": "I ride the fire truck to school.", "sentenceEs": "Voy a la escuela en camión de bomberos.", "radicalHint": "Transport vocabulary"},
  {"id": 132, "hanzi": "出租车", "pinyin": "chū zū chē", "tones": [1, 1, 1], "en": "Taxi", "es": "Taxi", "emoji": "🚕", "category": "Transport", "level": "advanced", "sentenceZh": "我坐出租车去上学。", "sentencePinyin": "wǒ zuò chū zū chē qù shàng xué", "sentenceEn": "I ride the taxi to school.", "sentenceEs": "Voy a la escuela en taxi.", "radicalHint": "Transport vocabulary"},
  {"id": 133, "hanzi": "卡车", "pinyin": "kǎ chē", "tones": [3, 1], "en": "Truck", "es": "Camión", "emoji": "🚚", "category": "Transport", "level": "beginner", "sentenceZh": "我坐卡车去上学。", "sentencePinyin": "wǒ zuò kǎ chē qù shàng xué", "sentenceEn": "I ride the truck to school.", "sentenceEs": "Voy a la escuela en camión.", "radicalHint": "Transport vocabulary"},
  {"id": 134, "hanzi": "拖拉机", "pinyin": "tuō lā jī", "tones": [1, 1, 1], "en": "Tractor", "es": "Tractor", "emoji": "🚜", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐拖拉机去上学。", "sentencePinyin": "wǒ zuò tuō lā jī qù shàng xué", "sentenceEn": "I ride the tractor to school.", "sentenceEs": "Voy a la escuela en tractor.", "radicalHint": "Transport vocabulary"},
  {"id": 135, "hanzi": "赛车", "pinyin": "sài chē", "tones": [4, 1], "en": "Race Car", "es": "Coche de Carreras", "emoji": "🏎️", "category": "Transport", "level": "advanced", "sentenceZh": "我坐赛车去上学。", "sentencePinyin": "wǒ zuò sài chē qù shàng xué", "sentenceEn": "I ride the race car to school.", "sentenceEs": "Voy a la escuela en coche de carreras.", "radicalHint": "Transport vocabulary"},
  {"id": 136, "hanzi": "摩托车", "pinyin": "mó tuō chē", "tones": [2, 1, 1], "en": "Motorcycle", "es": "Motocicleta", "emoji": "🏍️", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐摩托车去上学。", "sentencePinyin": "wǒ zuò mó tuō chē qù shàng xué", "sentenceEn": "I ride the motorcycle to school.", "sentenceEs": "Voy a la escuela en motocicleta.", "radicalHint": "Transport vocabulary"},
  {"id": 137, "hanzi": "滑板", "pinyin": "huá bǎn", "tones": [2, 3], "en": "Skateboard", "es": "Monopatín", "emoji": "🛹", "category": "Transport", "level": "beginner", "sentenceZh": "我坐滑板去上学。", "sentencePinyin": "wǒ zuò huá bǎn qù shàng xué", "sentenceEn": "I ride the skateboard to school.", "sentenceEs": "Voy a la escuela en monopatín.", "radicalHint": "Transport vocabulary"},
  {"id": 138, "hanzi": "轮滑鞋", "pinyin": "lún huá xié", "tones": [2, 2, 2], "en": "Roller Skates", "es": "Patines", "emoji": "🛼", "category": "Transport", "level": "advanced", "sentenceZh": "我坐轮滑鞋去上学。", "sentencePinyin": "wǒ zuò lún huá xié qù shàng xué", "sentenceEn": "I ride the roller skates to school.", "sentenceEs": "Voy a la escuela en patines.", "radicalHint": "Transport vocabulary"},
  {"id": 139, "hanzi": "热气球", "pinyin": "rè qì qiú", "tones": [4, 4, 2], "en": "Hot Air Balloon", "es": "Globo Aerostático", "emoji": "🎈", "category": "Transport", "level": "beginner", "sentenceZh": "我坐热气球去上学。", "sentencePinyin": "wǒ zuò rè qì qiú qù shàng xué", "sentenceEn": "I ride the hot air balloon to school.", "sentenceEs": "Voy a la escuela en globo aerostático.", "radicalHint": "Transport vocabulary"},
  {"id": 140, "hanzi": "飞船", "pinyin": "fēi chuán", "tones": [1, 2], "en": "Spaceship", "es": "Nave Espacial", "emoji": "🛸", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐飞船去上学。", "sentencePinyin": "wǒ zuò fēi chuán qù shàng xué", "sentenceEn": "I ride the spaceship to school.", "sentenceEs": "Voy a la escuela en nave espacial.", "radicalHint": "Transport vocabulary"},
  {"id": 141, "hanzi": "潜水艇", "pinyin": "qián shuǐ tǐng", "tones": [2, 3, 3], "en": "Submarine", "es": "Submarino", "emoji": "🤿", "category": "Transport", "level": "advanced", "sentenceZh": "我坐潜水艇去上学。", "sentencePinyin": "wǒ zuò qián shuǐ tǐng qù shàng xué", "sentenceEn": "I ride the submarine to school.", "sentenceEs": "Voy a la escuela en submarino.", "radicalHint": "Transport vocabulary"},
  {"id": 142, "hanzi": "帆船", "pinyin": "fān chuán", "tones": [1, 2], "en": "Sailboat", "es": "Velero", "emoji": "⛵", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐帆船去上学。", "sentencePinyin": "wǒ zuò fān chuán qù shàng xué", "sentenceEn": "I ride the sailboat to school.", "sentenceEs": "Voy a la escuela en velero.", "radicalHint": "Transport vocabulary"},
  {"id": 143, "hanzi": "快艇", "pinyin": "kuài tǐng", "tones": [4, 3], "en": "Speedboat", "es": "Lancha", "emoji": "🚤", "category": "Transport", "level": "beginner", "sentenceZh": "我坐快艇去上学。", "sentencePinyin": "wǒ zuò kuài tǐng qù shàng xué", "sentenceEn": "I ride the speedboat to school.", "sentenceEs": "Voy a la escuela en lancha.", "radicalHint": "Transport vocabulary"},
  {"id": 144, "hanzi": "缆车", "pinyin": "lǎn chē", "tones": [3, 1], "en": "Cable Car", "es": "Teleférico", "emoji": "🚡", "category": "Transport", "level": "advanced", "sentenceZh": "我坐缆车去上学。", "sentencePinyin": "wǒ zuò lǎn chē qù shàng xué", "sentenceEn": "I ride the cable car to school.", "sentenceEs": "Voy a la escuela en teleférico.", "radicalHint": "Transport vocabulary"},
  {"id": 145, "hanzi": "地铁", "pinyin": "dì tiě", "tones": [4, 3], "en": "Subway", "es": "Metro", "emoji": "🚇", "category": "Transport", "level": "beginner", "sentenceZh": "我坐地铁去上学。", "sentencePinyin": "wǒ zuò dì tiě qù shàng xué", "sentenceEn": "I ride the subway to school.", "sentenceEs": "Voy a la escuela en metro.", "radicalHint": "Transport vocabulary"},
  {"id": 146, "hanzi": "高铁", "pinyin": "gāo tiě", "tones": [1, 3], "en": "Bullet Train", "es": "Tren de Alta Velocidad", "emoji": "🚄", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐高铁去上学。", "sentencePinyin": "wǒ zuò gāo tiě qù shàng xué", "sentenceEn": "I ride the bullet train to school.", "sentenceEs": "Voy a la escuela en tren de alta velocidad.", "radicalHint": "Transport vocabulary"},
  {"id": 147, "hanzi": "校车", "pinyin": "xiào chē", "tones": [4, 1], "en": "School Bus", "es": "Autobús Escolar", "emoji": "🚌", "category": "Transport", "level": "advanced", "sentenceZh": "我坐校车去上学。", "sentencePinyin": "wǒ zuò xiào chē qù shàng xué", "sentenceEn": "I ride the school bus to school.", "sentenceEs": "Voy a la escuela en autobús escolar.", "radicalHint": "Transport vocabulary"},
  {"id": 148, "hanzi": "吉普车", "pinyin": "jí pǔ chē", "tones": [2, 3, 1], "en": "Jeep", "es": "Jeep", "emoji": "🚙", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐吉普车去上学。", "sentencePinyin": "wǒ zuò jí pǔ chē qù shàng xué", "sentenceEn": "I ride the jeep to school.", "sentenceEs": "Voy a la escuela en jeep.", "radicalHint": "Transport vocabulary"},
  {"id": 149, "hanzi": "皮卡", "pinyin": "pí kǎ", "tones": [2, 3], "en": "Pickup Truck", "es": "Camioneta", "emoji": "🛻", "category": "Transport", "level": "beginner", "sentenceZh": "我坐皮卡去上学。", "sentencePinyin": "wǒ zuò pí kǎ qù shàng xué", "sentenceEn": "I ride the pickup truck to school.", "sentenceEs": "Voy a la escuela en camioneta.", "radicalHint": "Transport vocabulary"},
  {"id": 150, "hanzi": "三轮车", "pinyin": "sān lún chē", "tones": [1, 2, 1], "en": "Tricycle", "es": "Triciclo", "emoji": "🛺", "category": "Transport", "level": "advanced", "sentenceZh": "我坐三轮车去上学。", "sentencePinyin": "wǒ zuò sān lún chē qù shàng xué", "sentenceEn": "I ride the tricycle to school.", "sentenceEs": "Voy a la escuela en triciclo.", "radicalHint": "Transport vocabulary"},
  {"id": 151, "hanzi": "婴儿车", "pinyin": "yīng ér chē", "tones": [1, 2, 1], "en": "Stroller", "es": "Cochecito", "emoji": "🛒", "category": "Transport", "level": "beginner", "sentenceZh": "我坐婴儿车去上学。", "sentencePinyin": "wǒ zuò yīng ér chē qù shàng xué", "sentenceEn": "I ride the stroller to school.", "sentenceEs": "Voy a la escuela en cochecito.", "radicalHint": "Transport vocabulary"},
  {"id": 152, "hanzi": "购物车", "pinyin": "gòu wù chē", "tones": [4, 4, 1], "en": "Shopping Cart", "es": "Carrito de Compras", "emoji": "🛒", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐购物车去上学。", "sentencePinyin": "wǒ zuò gòu wù chē qù shàng xué", "sentenceEn": "I ride the shopping cart to school.", "sentenceEs": "Voy a la escuela en carrito de compras.", "radicalHint": "Transport vocabulary"},
  {"id": 153, "hanzi": "滑板车", "pinyin": "huá bǎn chē", "tones": [2, 3, 1], "en": "Scooter", "es": "Patinete", "emoji": "🛴", "category": "Transport", "level": "advanced", "sentenceZh": "我坐滑板车去上学。", "sentencePinyin": "wǒ zuò huá bǎn chē qù shàng xué", "sentenceEn": "I ride the scooter to school.", "sentenceEs": "Voy a la escuela en patinete.", "radicalHint": "Transport vocabulary"},
  {"id": 154, "hanzi": "电动车", "pinyin": "diàn dòng chē", "tones": [4, 4, 1], "en": "Electric Bike", "es": "Bici Eléctrica", "emoji": "🛵", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐电动车去上学。", "sentencePinyin": "wǒ zuò diàn dòng chē qù shàng xué", "sentenceEn": "I ride the electric bike to school.", "sentenceEs": "Voy a la escuela en bici eléctrica.", "radicalHint": "Transport vocabulary"},
  {"id": 155, "hanzi": "马车", "pinyin": "mǎ chē", "tones": [3, 1], "en": "Carriage", "es": "Carruaje", "emoji": "🐎", "category": "Transport", "level": "beginner", "sentenceZh": "我坐马车去上学。", "sentencePinyin": "wǒ zuò mǎ chē qù shàng xué", "sentenceEn": "I ride the carriage to school.", "sentenceEs": "Voy a la escuela en carruaje.", "radicalHint": "Transport vocabulary"},
  {"id": 156, "hanzi": "雪橇", "pinyin": "xuě qiāo", "tones": [3, 1], "en": "Sled", "es": "Trineo", "emoji": "🛷", "category": "Transport", "level": "advanced", "sentenceZh": "我坐雪橇去上学。", "sentencePinyin": "wǒ zuò xuě qiāo qù shàng xué", "sentenceEn": "I ride the sled to school.", "sentenceEs": "Voy a la escuela en trineo.", "radicalHint": "Transport vocabulary"},
  {"id": 157, "hanzi": "飞艇", "pinyin": "fēi tǐng", "tones": [1, 3], "en": "Airship", "es": "Dirigible", "emoji": "🛸", "category": "Transport", "level": "beginner", "sentenceZh": "我坐飞艇去上学。", "sentencePinyin": "wǒ zuò fēi tǐng qù shàng xué", "sentenceEn": "I ride the airship to school.", "sentenceEs": "Voy a la escuela en dirigible.", "radicalHint": "Transport vocabulary"},
  {"id": 158, "hanzi": "太空站", "pinyin": "tài kōng zhàn", "tones": [4, 1, 4], "en": "Space Station", "es": "Estación Espacial", "emoji": "🛰️", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐太空站去上学。", "sentencePinyin": "wǒ zuò tài kōng zhàn qù shàng xué", "sentenceEn": "I ride the space station to school.", "sentenceEs": "Voy a la escuela en estación espacial.", "radicalHint": "Transport vocabulary"},
  {"id": 159, "hanzi": "清扫车", "pinyin": "qīng sǎo chē", "tones": [1, 3, 1], "en": "Sweeper Truck", "es": "Barredora", "emoji": "🧹", "category": "Transport", "level": "advanced", "sentenceZh": "我坐清扫车去上学。", "sentencePinyin": "wǒ zuò qīng sǎo chē qù shàng xué", "sentenceEn": "I ride the sweeper truck to school.", "sentenceEs": "Voy a la escuela en barredora.", "radicalHint": "Transport vocabulary"},
  {"id": 160, "hanzi": "起重机", "pinyin": "qǐ zhòng jī", "tones": [3, 4, 1], "en": "Crane Truck", "es": "Grúa", "emoji": "🏗️", "category": "Transport", "level": "intermediate", "sentenceZh": "我坐起重机去上学。", "sentencePinyin": "wǒ zuò qǐ zhòng jī qù shàng xué", "sentenceEn": "I ride the crane truck to school.", "sentenceEs": "Voy a la escuela en grúa.", "radicalHint": "Transport vocabulary"},
  {"id": 161, "hanzi": "爸爸", "pinyin": "bà bà", "tones": [4, 4], "en": "Father", "es": "Papá", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的爸爸。", "sentencePinyin": "wǒ ài wǒ de bà bà", "sentenceEn": "I love my father.", "sentenceEs": "Quiero a mi papá.", "radicalHint": "Family vocabulary"},
  {"id": 162, "hanzi": "妈妈", "pinyin": "mā mā", "tones": [1, 1], "en": "Mother", "es": "Mamá", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的妈妈。", "sentencePinyin": "wǒ ài wǒ de mā mā", "sentenceEn": "I love my mother.", "sentenceEs": "Quiero a mi mamá.", "radicalHint": "Family vocabulary"},
  {"id": 163, "hanzi": "哥哥", "pinyin": "gē gē", "tones": [1, 1], "en": "Brother", "es": "Hermano", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的哥哥。", "sentencePinyin": "wǒ ài wǒ de gē gē", "sentenceEn": "I love my brother.", "sentenceEs": "Quiero a mi hermano.", "radicalHint": "Family vocabulary"},
  {"id": 164, "hanzi": "姐姐", "pinyin": "jiě jiě", "tones": [3, 3], "en": "Sister", "es": "Hermana", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的姐姐。", "sentencePinyin": "wǒ ài wǒ de jiě jiě", "sentenceEn": "I love my sister.", "sentenceEs": "Quiero a mi hermana.", "radicalHint": "Family vocabulary"},
  {"id": 165, "hanzi": "弟弟", "pinyin": "dì dì", "tones": [4, 4], "en": "Little Brother", "es": "Hermano Pequeño", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的弟弟。", "sentencePinyin": "wǒ ài wǒ de dì dì", "sentenceEn": "I love my grandpa.", "sentenceEs": "Quiero a mi abuelo.", "radicalHint": "Family vocabulary"},
  {"id": 166, "hanzi": "妹妹", "pinyin": "mèi mèi", "tones": [4, 4], "en": "Little Sister", "es": "Hermana Pequeña", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的妹妹。", "sentencePinyin": "wǒ ài wǒ de mèi mèi", "sentenceEn": "I love my grandma.", "sentenceEs": "Quiero a mi abuela.", "radicalHint": "Family vocabulary"},
  {"id": 167, "hanzi": "爷爷", "pinyin": "yé yé", "tones": [2, 2], "en": "Grandpa", "es": "Abuelo", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的爷爷。", "sentencePinyin": "wǒ ài wǒ de yé yé", "sentenceEn": "I love my friend.", "sentenceEs": "Quiero a mi amigo.", "radicalHint": "Family vocabulary"},
  {"id": 168, "hanzi": "奶奶", "pinyin": "nǎi nǎi", "tones": [3, 3], "en": "Grandma", "es": "Abuela", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的奶奶。", "sentencePinyin": "wǒ ài wǒ de nǎi nǎi", "sentenceEn": "I love my teacher.", "sentenceEs": "Quiero a mi profesor.", "radicalHint": "Family vocabulary"},
  {"id": 169, "hanzi": "朋友", "pinyin": "péng yǒu", "tones": [2, 3], "en": "Friend", "es": "Amigo", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的朋友。", "sentencePinyin": "wǒ ài wǒ de péng yǒu", "sentenceEn": "I love my doctor.", "sentenceEs": "Quiero a mi médico.", "radicalHint": "Family vocabulary"},
  {"id": 170, "hanzi": "老师", "pinyin": "lǎo shī", "tones": [3, 1], "en": "Teacher", "es": "Profesor", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的老师。", "sentencePinyin": "wǒ ài wǒ de lǎo shī", "sentenceEn": "I love my nurse.", "sentenceEs": "Quiero a mi enfermera.", "radicalHint": "Family vocabulary"},
  {"id": 171, "hanzi": "医生", "pinyin": "yī shēng", "tones": [1, 1], "en": "Doctor", "es": "Doctor", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的医生。", "sentencePinyin": "wǒ ài wǒ de yī shēng", "sentenceEn": "I love my father.", "sentenceEs": "Quiero a mi papá.", "radicalHint": "Family vocabulary"},
  {"id": 172, "hanzi": "护士", "pinyin": "hù shì", "tones": [4, 4], "en": "Nurse", "es": "Enfermera", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的护士。", "sentencePinyin": "wǒ ài wǒ de hù shì", "sentenceEn": "I love my mother.", "sentenceEs": "Quiero a mi mamá.", "radicalHint": "Family vocabulary"},
  {"id": 173, "hanzi": "警察", "pinyin": "jǐng chá", "tones": [3, 2], "en": "Policeman", "es": "Policía", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的警察。", "sentencePinyin": "wǒ ài wǒ de jǐng chá", "sentenceEn": "I love my brother.", "sentenceEs": "Quiero a mi hermano.", "radicalHint": "Family vocabulary"},
  {"id": 174, "hanzi": "消防员", "pinyin": "xiāo fáng yuán", "tones": [1, 2, 2], "en": "Firefighter", "es": "Bombero", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的消防员。", "sentencePinyin": "wǒ ài wǒ de xiāo fáng yuán", "sentenceEn": "I love my sister.", "sentenceEs": "Quiero a mi hermana.", "radicalHint": "Family vocabulary"},
  {"id": 175, "hanzi": "厨师", "pinyin": "chú shī", "tones": [2, 1], "en": "Chef", "es": "Cocinero", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的厨师。", "sentencePinyin": "wǒ ài wǒ de chú shī", "sentenceEn": "I love my grandpa.", "sentenceEs": "Quiero a mi abuelo.", "radicalHint": "Family vocabulary"},
  {"id": 176, "hanzi": "司机", "pinyin": "sī jī", "tones": [1, 1], "en": "Driver", "es": "Conductor", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的司机。", "sentencePinyin": "wǒ ài wǒ de sī jī", "sentenceEn": "I love my grandma.", "sentenceEs": "Quiero a mi abuela.", "radicalHint": "Family vocabulary"},
  {"id": 177, "hanzi": "画家", "pinyin": "huà jiā", "tones": [4, 1], "en": "Painter", "es": "Pintor", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的画家。", "sentencePinyin": "wǒ ài wǒ de huà jiā", "sentenceEn": "I love my friend.", "sentenceEs": "Quiero a mi amigo.", "radicalHint": "Family vocabulary"},
  {"id": 178, "hanzi": "音乐家", "pinyin": "yīn lè jiā", "tones": [1, 4, 1], "en": "Musician", "es": "Músico", "emoji": "👨‍👩‍👧", "category": "Family", "level": "advanced", "sentenceZh": "我爱我的音乐家。", "sentencePinyin": "wǒ ài wǒ de yīn lè jiā", "sentenceEn": "I love my teacher.", "sentenceEs": "Quiero a mi profesor.", "radicalHint": "Family vocabulary"},
  {"id": 179, "hanzi": "运动员", "pinyin": "yùn dòng yuán", "tones": [4, 4, 2], "en": "Athlete", "es": "Atleta", "emoji": "👨‍👩‍👧", "category": "Family", "level": "beginner", "sentenceZh": "我爱我的运动员。", "sentencePinyin": "wǒ ài wǒ de yùn dòng yuán", "sentenceEn": "I love my doctor.", "sentenceEs": "Quiero a mi médico.", "radicalHint": "Family vocabulary"},
  {"id": 180, "hanzi": "科学家", "pinyin": "kē xué jiā", "tones": [1, 2, 1], "en": "Scientist", "es": "Científico", "emoji": "👨‍👩‍👧", "category": "Family", "level": "intermediate", "sentenceZh": "我爱我的科学家。", "sentencePinyin": "wǒ ài wǒ de kē xué jiā", "sentenceEn": "I love my nurse.", "sentenceEs": "Quiero a mi enfermera.", "radicalHint": "Family vocabulary"},
  {"id": 181, "hanzi": "图书", "pinyin": "tú shū", "tones": [2, 1], "en": "Book", "es": "Libro", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用图书。", "sentencePinyin": "shàng xué yào yòng tú shū", "sentenceEn": "We use book at school.", "sentenceEs": "Usamos libro en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 182, "hanzi": "铅笔", "pinyin": "qiān bǐ", "tones": [1, 3], "en": "Pencil", "es": "Lápiz", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用铅笔。", "sentencePinyin": "shàng xué yào yòng qiān bǐ", "sentenceEn": "We use pencil at school.", "sentenceEs": "Usamos lápiz en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 183, "hanzi": "书包", "pinyin": "shū bāo", "tones": [1, 1], "en": "Backpack", "es": "Mochila", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用书包。", "sentencePinyin": "shàng xué yào yòng shū bāo", "sentenceEn": "We use backpack at school.", "sentenceEs": "Usamos mochila en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 184, "hanzi": "电脑", "pinyin": "diàn nǎo", "tones": [4, 3], "en": "Computer", "es": "Ordenador", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用电脑。", "sentencePinyin": "shàng xué yào yòng diàn nǎo", "sentenceEn": "We use computer at school.", "sentenceEs": "Usamos ordenador en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 185, "hanzi": "时钟", "pinyin": "shí zhōng", "tones": [2, 1], "en": "Clock", "es": "Reloj", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用时钟。", "sentencePinyin": "shàng xué yào yòng shí zhōng", "sentenceEn": "We use clock at school.", "sentenceEs": "Usamos reloj en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 186, "hanzi": "木门", "pinyin": "mù mén", "tones": [4, 2], "en": "Door", "es": "Puerta", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用木门。", "sentencePinyin": "shàng xué yào yòng mù mén", "sentenceEn": "We use door at school.", "sentenceEs": "Usamos puerta en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 187, "hanzi": "窗户", "pinyin": "chuāng hù", "tones": [1, 4], "en": "Window", "es": "Ventana", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用窗户。", "sentencePinyin": "shàng xué yào yòng chuāng hù", "sentenceEn": "We use window at school.", "sentenceEs": "Usamos ventana en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 188, "hanzi": "桌子", "pinyin": "zhuō zi", "tones": [1, 0], "en": "Table", "es": "Mesa", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用桌子。", "sentencePinyin": "shàng xué yào yòng zhuō zi", "sentenceEn": "We use table at school.", "sentenceEs": "Usamos mesa en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 189, "hanzi": "椅子", "pinyin": "yǐ zi", "tones": [3, 0], "en": "Chair", "es": "Silla", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用椅子。", "sentencePinyin": "shàng xué yào yòng yǐ zi", "sentenceEn": "We use chair at school.", "sentenceEs": "Usamos silla en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 190, "hanzi": "玩具", "pinyin": "wán jù", "tones": [2, 4], "en": "Toy", "es": "Juguete", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用玩具。", "sentencePinyin": "shàng xué yào yòng wán jù", "sentenceEn": "We use toy at school.", "sentenceEs": "Usamos juguete en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 191, "hanzi": "积木", "pinyin": "jī mù", "tones": [1, 4], "en": "Toy Blocks", "es": "Bloques", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用积木。", "sentencePinyin": "shàng xué yào yòng jī mù", "sentenceEn": "We use book at school.", "sentenceEs": "Usamos libro en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 192, "hanzi": "娃娃", "pinyin": "wá wá", "tones": [2, 2], "en": "Doll", "es": "Muñeca", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用娃娃。", "sentencePinyin": "shàng xué yào yòng wá wá", "sentenceEn": "We use pencil at school.", "sentenceEs": "Usamos lápiz en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 193, "hanzi": "蜡笔", "pinyin": "là bǐ", "tones": [4, 3], "en": "Crayon", "es": "Crayón", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用蜡笔。", "sentencePinyin": "shàng xué yào yòng là bǐ", "sentenceEn": "We use backpack at school.", "sentenceEs": "Usamos mochila en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 194, "hanzi": "剪刀", "pinyin": "jiǎn dāo", "tones": [3, 1], "en": "Scissors", "es": "Tijeras", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用剪刀。", "sentencePinyin": "shàng xué yào yòng jiǎn dāo", "sentenceEn": "We use computer at school.", "sentenceEs": "Usamos ordenador en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 195, "hanzi": "尺子", "pinyin": "chǐ zi", "tones": [3, 0], "en": "Ruler", "es": "Regla", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用尺子。", "sentencePinyin": "shàng xué yào yòng chǐ zi", "sentenceEn": "We use clock at school.", "sentenceEs": "Usamos reloj en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 196, "hanzi": "橡皮", "pinyin": "xiàng pí", "tones": [4, 2], "en": "Eraser", "es": "Borrador", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用橡皮。", "sentencePinyin": "shàng xué yào yòng xiàng pí", "sentenceEn": "We use door at school.", "sentenceEs": "Usamos puerta en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 197, "hanzi": "画板", "pinyin": "huà bǎn", "tones": [4, 3], "en": "Drawing Board", "es": "Pizarra", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用画板。", "sentencePinyin": "shàng xué yào yòng huà bǎn", "sentenceEn": "We use window at school.", "sentenceEs": "Usamos ventana en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 198, "hanzi": "黑板", "pinyin": "hēi bǎn", "tones": [1, 3], "en": "Blackboard", "es": "Pizarra Negra", "emoji": "📚", "category": "School", "level": "advanced", "sentenceZh": "上学要用黑板。", "sentencePinyin": "shàng xué yào yòng hēi bǎn", "sentenceEn": "We use table at school.", "sentenceEs": "Usamos mesa en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 199, "hanzi": "课本", "pinyin": "kè běn", "tones": [4, 3], "en": "Textbook", "es": "Libro de Texto", "emoji": "📚", "category": "School", "level": "beginner", "sentenceZh": "上学要用课本。", "sentencePinyin": "shàng xué yào yòng kè běn", "sentenceEn": "We use chair at school.", "sentenceEs": "Usamos silla en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 200, "hanzi": "作业", "pinyin": "zuò yè", "tones": [4, 4], "en": "Homework", "es": "Tarea", "emoji": "📚", "category": "School", "level": "intermediate", "sentenceZh": "上学要用作业。", "sentencePinyin": "shàng xué yào yòng zuò yè", "sentenceEn": "We use toy at school.", "sentenceEs": "Usamos juguete en la escuela.", "radicalHint": "School vocabulary"},
  {"id": 201, "hanzi": "红色", "pinyin": "hóng sè", "tones": [2, 4], "en": "Red", "es": "Rojo", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢红色。", "sentencePinyin": "wǒ zuì xǐ huān hóng sè", "sentenceEn": "My favorite color is red.", "sentenceEs": "Mi color favorito es rojo.", "radicalHint": "Colors vocabulary"},
  {"id": 202, "hanzi": "蓝色", "pinyin": "lán sè", "tones": [2, 4], "en": "Blue", "es": "Azul", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢蓝色。", "sentencePinyin": "wǒ zuì xǐ huān lán sè", "sentenceEn": "My favorite color is blue.", "sentenceEs": "Mi color favorito es azul.", "radicalHint": "Colors vocabulary"},
  {"id": 203, "hanzi": "黄色", "pinyin": "huáng sè", "tones": [2, 4], "en": "Yellow", "es": "Amarillo", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢黄色。", "sentencePinyin": "wǒ zuì xǐ huān huáng sè", "sentenceEn": "My favorite color is yellow.", "sentenceEs": "Mi color favorito es amarillo.", "radicalHint": "Colors vocabulary"},
  {"id": 204, "hanzi": "绿色", "pinyin": "lǜ sè", "tones": [4, 4], "en": "Green", "es": "Verde", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢绿色。", "sentencePinyin": "wǒ zuì xǐ huān lǜ sè", "sentenceEn": "My favorite color is green.", "sentenceEs": "Mi color favorito es verde.", "radicalHint": "Colors vocabulary"},
  {"id": 205, "hanzi": "黑色", "pinyin": "hēi sè", "tones": [1, 4], "en": "Black", "es": "Negro", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢黑色。", "sentencePinyin": "wǒ zuì xǐ huān hēi sè", "sentenceEn": "My favorite color is black.", "sentenceEs": "Mi color favorito es negro.", "radicalHint": "Colors vocabulary"},
  {"id": 206, "hanzi": "白色", "pinyin": "bái sè", "tones": [2, 4], "en": "White", "es": "Blanco", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢白色。", "sentencePinyin": "wǒ zuì xǐ huān bái sè", "sentenceEn": "My favorite color is white.", "sentenceEs": "Mi color favorito es blanco.", "radicalHint": "Colors vocabulary"},
  {"id": 207, "hanzi": "粉色", "pinyin": "fěn sè", "tones": [3, 4], "en": "Pink", "es": "Rosa", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢粉色。", "sentencePinyin": "wǒ zuì xǐ huān fěn sè", "sentenceEn": "My favorite color is pink.", "sentenceEs": "Mi color favorito es rosa.", "radicalHint": "Colors vocabulary"},
  {"id": 208, "hanzi": "紫色", "pinyin": "zǐ sè", "tones": [3, 4], "en": "Purple", "es": "Púrpura", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢紫色。", "sentencePinyin": "wǒ zuì xǐ huān zǐ sè", "sentenceEn": "My favorite color is purple.", "sentenceEs": "Mi color favorito es púrpura.", "radicalHint": "Colors vocabulary"},
  {"id": 209, "hanzi": "橙色", "pinyin": "chéng sè", "tones": [2, 4], "en": "Orange", "es": "Naranja", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢橙色。", "sentencePinyin": "wǒ zuì xǐ huān chéng sè", "sentenceEn": "My favorite color is orange.", "sentenceEs": "Mi color favorito es naranja.", "radicalHint": "Colors vocabulary"},
  {"id": 210, "hanzi": "棕色", "pinyin": "zōng sè", "tones": [1, 4], "en": "Brown", "es": "Marrón", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢棕色。", "sentencePinyin": "wǒ zuì xǐ huān zōng sè", "sentenceEn": "My favorite color is brown.", "sentenceEs": "Mi color favorito es marrón.", "radicalHint": "Colors vocabulary"},
  {"id": 211, "hanzi": "圆形", "pinyin": "yuán xíng", "tones": [2, 2], "en": "Circle", "es": "Círculo", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢圆形。", "sentencePinyin": "wǒ zuì xǐ huān yuán xíng", "sentenceEn": "My favorite color is red.", "sentenceEs": "Mi color favorito es rojo.", "radicalHint": "Colors vocabulary"},
  {"id": 212, "hanzi": "三角形", "pinyin": "sān jiǎo xíng", "tones": [1, 3, 2], "en": "Triangle", "es": "Triángulo", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢三角形。", "sentencePinyin": "wǒ zuì xǐ huān sān jiǎo xíng", "sentenceEn": "My favorite color is blue.", "sentenceEs": "Mi color favorito es azul.", "radicalHint": "Colors vocabulary"},
  {"id": 213, "hanzi": "正方形", "pinyin": "zhèng fāng xíng", "tones": [4, 1, 2], "en": "Square", "es": "Cuadrado", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢正方形。", "sentencePinyin": "wǒ zuì xǐ huān zhèng fāng xíng", "sentenceEn": "My favorite color is yellow.", "sentenceEs": "Mi color favorito es amarillo.", "radicalHint": "Colors vocabulary"},
  {"id": 214, "hanzi": "星形", "pinyin": "xīng xíng", "tones": [1, 2], "en": "Star", "es": "Estrella", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢星形。", "sentencePinyin": "wǒ zuì xǐ huān xīng xíng", "sentenceEn": "My favorite color is green.", "sentenceEs": "Mi color favorito es verde.", "radicalHint": "Colors vocabulary"},
  {"id": 215, "hanzi": "心形", "pinyin": "xīn xíng", "tones": [1, 2], "en": "Heart", "es": "Corazón", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢心形。", "sentencePinyin": "wǒ zuì xǐ huān xīn xíng", "sentenceEn": "My favorite color is black.", "sentenceEs": "Mi color favorito es negro.", "radicalHint": "Colors vocabulary"},
  {"id": 216, "hanzi": "椭圆", "pinyin": "tuǒ yuán", "tones": [3, 2], "en": "Oval", "es": "Óvalo", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢椭圆。", "sentencePinyin": "wǒ zuì xǐ huān tuǒ yuán", "sentenceEn": "My favorite color is white.", "sentenceEs": "Mi color favorito es blanco.", "radicalHint": "Colors vocabulary"},
  {"id": 217, "hanzi": "长方形", "pinyin": "zhǎng fāng xíng", "tones": [3, 1, 2], "en": "Rectangle", "es": "Rectángulo", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢长方形。", "sentencePinyin": "wǒ zuì xǐ huān zhǎng fāng xíng", "sentenceEn": "My favorite color is pink.", "sentenceEs": "Mi color favorito es rosa.", "radicalHint": "Colors vocabulary"},
  {"id": 218, "hanzi": "五角星", "pinyin": "wǔ jiǎo xīng", "tones": [3, 3, 1], "en": "Five-pointed Star", "es": "Estrella de Cinco Puntas", "emoji": "🎨", "category": "Colors", "level": "advanced", "sentenceZh": "我最喜欢五角星。", "sentencePinyin": "wǒ zuì xǐ huān wǔ jiǎo xīng", "sentenceEn": "My favorite color is purple.", "sentenceEs": "Mi color favorito es púrpura.", "radicalHint": "Colors vocabulary"},
  {"id": 219, "hanzi": "彩虹色", "pinyin": "cǎi hóng sè", "tones": [3, 2, 4], "en": "Rainbow", "es": "Arcoíris", "emoji": "🎨", "category": "Colors", "level": "beginner", "sentenceZh": "我最喜欢彩虹色。", "sentencePinyin": "wǒ zuì xǐ huān cǎi hóng sè", "sentenceEn": "My favorite color is orange.", "sentenceEs": "Mi color favorito es naranja.", "radicalHint": "Colors vocabulary"},
  {"id": 220, "hanzi": "金色", "pinyin": "jīn sè", "tones": [1, 4], "en": "Gold", "es": "Oro", "emoji": "🎨", "category": "Colors", "level": "intermediate", "sentenceZh": "我最喜欢金色。", "sentencePinyin": "wǒ zuì xǐ huān jīn sè", "sentenceEn": "My favorite color is brown.", "sentenceEs": "Mi color favorito es marrón.", "radicalHint": "Colors vocabulary"},
  {"id": 221, "hanzi": "一", "pinyin": "yī", "tones": [1], "en": "One", "es": "Uno", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字一。", "sentencePinyin": "wǒ xué huì le shù zì yī", "sentenceEn": "I learned the number one.", "sentenceEs": "Aprendí el número uno.", "radicalHint": "Numbers vocabulary"},
  {"id": 222, "hanzi": "二", "pinyin": "èr", "tones": [4], "en": "Two", "es": "Dos", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字二。", "sentencePinyin": "wǒ xué huì le shù zì èr", "sentenceEn": "I learned the number two.", "sentenceEs": "Aprendí el número dos.", "radicalHint": "Numbers vocabulary"},
  {"id": 223, "hanzi": "三", "pinyin": "sān", "tones": [1], "en": "Three", "es": "Tres", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字三。", "sentencePinyin": "wǒ xué huì le shù zì sān", "sentenceEn": "I learned the number three.", "sentenceEs": "Aprendí el número tres.", "radicalHint": "Numbers vocabulary"},
  {"id": 224, "hanzi": "四", "pinyin": "sì", "tones": [4], "en": "Four", "es": "Cuatro", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字四。", "sentencePinyin": "wǒ xué huì le shù zì sì", "sentenceEn": "I learned the number four.", "sentenceEs": "Aprendí el número cuatro.", "radicalHint": "Numbers vocabulary"},
  {"id": 225, "hanzi": "五", "pinyin": "wǔ", "tones": [3], "en": "Five", "es": "Cinco", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字五。", "sentencePinyin": "wǒ xué huì le shù zì wǔ", "sentenceEn": "I learned the number five.", "sentenceEs": "Aprendí el número cinco.", "radicalHint": "Numbers vocabulary"},
  {"id": 226, "hanzi": "六", "pinyin": "liù", "tones": [4], "en": "Six", "es": "Seis", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字六。", "sentencePinyin": "wǒ xué huì le shù zì liù", "sentenceEn": "I learned the number six.", "sentenceEs": "Aprendí el número seis.", "radicalHint": "Numbers vocabulary"},
  {"id": 227, "hanzi": "七", "pinyin": "qī", "tones": [1], "en": "Seven", "es": "Siete", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字七。", "sentencePinyin": "wǒ xué huì le shù zì qī", "sentenceEn": "I learned the number seven.", "sentenceEs": "Aprendí el número siete.", "radicalHint": "Numbers vocabulary"},
  {"id": 228, "hanzi": "八", "pinyin": "bā", "tones": [1], "en": "Eight", "es": "Ocho", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字八。", "sentencePinyin": "wǒ xué huì le shù zì bā", "sentenceEn": "I learned the number eight.", "sentenceEs": "Aprendí el número ocho.", "radicalHint": "Numbers vocabulary"},
  {"id": 229, "hanzi": "九", "pinyin": "jiǔ", "tones": [3], "en": "Nine", "es": "Nueve", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字九。", "sentencePinyin": "wǒ xué huì le shù zì jiǔ", "sentenceEn": "I learned the number nine.", "sentenceEs": "Aprendí el número nueve.", "radicalHint": "Numbers vocabulary"},
  {"id": 230, "hanzi": "十", "pinyin": "shí", "tones": [2], "en": "Ten", "es": "Diez", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字十。", "sentencePinyin": "wǒ xué huì le shù zì shí", "sentenceEn": "I learned the number ten.", "sentenceEs": "Aprendí el número diez.", "radicalHint": "Numbers vocabulary"},
  {"id": 231, "hanzi": "十一", "pinyin": "shí yī", "tones": [2, 1], "en": "Eleven", "es": "Once", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字十一。", "sentencePinyin": "wǒ xué huì le shù zì shí yī", "sentenceEn": "I learned the number one.", "sentenceEs": "Aprendí el número uno.", "radicalHint": "Numbers vocabulary"},
  {"id": 232, "hanzi": "十二", "pinyin": "shí èr", "tones": [2, 4], "en": "Twelve", "es": "Doce", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字十二。", "sentencePinyin": "wǒ xué huì le shù zì shí èr", "sentenceEn": "I learned the number two.", "sentenceEs": "Aprendí el número dos.", "radicalHint": "Numbers vocabulary"},
  {"id": 233, "hanzi": "一百", "pinyin": "yī bǎi", "tones": [1, 3], "en": "One Hundred", "es": "Cien", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字一百。", "sentencePinyin": "wǒ xué huì le shù zì yī bǎi", "sentenceEn": "I learned the number three.", "sentenceEs": "Aprendí el número tres.", "radicalHint": "Numbers vocabulary"},
  {"id": 234, "hanzi": "一千", "pinyin": "yī qiān", "tones": [1, 1], "en": "One Thousand", "es": "Mil", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字一千。", "sentencePinyin": "wǒ xué huì le shù zì yī qiān", "sentenceEn": "I learned the number four.", "sentenceEs": "Aprendí el número cuatro.", "radicalHint": "Numbers vocabulary"},
  {"id": 235, "hanzi": "今天", "pinyin": "jīn tiān", "tones": [1, 1], "en": "Today", "es": "Hoy", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字今天。", "sentencePinyin": "wǒ xué huì le shù zì jīn tiān", "sentenceEn": "I learned the number five.", "sentenceEs": "Aprendí el número cinco.", "radicalHint": "Numbers vocabulary"},
  {"id": 236, "hanzi": "明天", "pinyin": "míng tiān", "tones": [2, 1], "en": "Tomorrow", "es": "Mañana", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字明天。", "sentencePinyin": "wǒ xué huì le shù zì míng tiān", "sentenceEn": "I learned the number six.", "sentenceEs": "Aprendí el número seis.", "radicalHint": "Numbers vocabulary"},
  {"id": 237, "hanzi": "早上", "pinyin": "zǎo shàng", "tones": [3, 4], "en": "Morning", "es": "Mañana", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字早上。", "sentencePinyin": "wǒ xué huì le shù zì zǎo shàng", "sentenceEn": "I learned the number seven.", "sentenceEs": "Aprendí el número siete.", "radicalHint": "Numbers vocabulary"},
  {"id": 238, "hanzi": "晚上", "pinyin": "wǎn shàng", "tones": [3, 4], "en": "Night", "es": "Noche", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字晚上。", "sentencePinyin": "wǒ xué huì le shù zì wǎn shàng", "sentenceEn": "I learned the number eight.", "sentenceEs": "Aprendí el número ocho.", "radicalHint": "Numbers vocabulary"},
  {"id": 239, "hanzi": "春天", "pinyin": "chūn tiān", "tones": [1, 1], "en": "Spring", "es": "Primavera", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字春天。", "sentencePinyin": "wǒ xué huì le shù zì chūn tiān", "sentenceEn": "I learned the number nine.", "sentenceEs": "Aprendí el número nueve.", "radicalHint": "Numbers vocabulary"},
  {"id": 240, "hanzi": "夏天", "pinyin": "xià tiān", "tones": [4, 1], "en": "Summer", "es": "Verano", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字夏天。", "sentencePinyin": "wǒ xué huì le shù zì xià tiān", "sentenceEn": "I learned the number ten.", "sentenceEs": "Aprendí el número diez.", "radicalHint": "Numbers vocabulary"},
  {"id": 241, "hanzi": "秋天", "pinyin": "qiū tiān", "tones": [1, 1], "en": "Autumn", "es": "Otoño", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字秋天。", "sentencePinyin": "wǒ xué huì le shù zì qiū tiān", "sentenceEn": "I learned the number one.", "sentenceEs": "Aprendí el número uno.", "radicalHint": "Numbers vocabulary"},
  {"id": 242, "hanzi": "冬天", "pinyin": "dōng tiān", "tones": [1, 1], "en": "Winter", "es": "Invierno", "emoji": "🔢", "category": "Numbers", "level": "intermediate", "sentenceZh": "我学会了数字冬天。", "sentencePinyin": "wǒ xué huì le shù zì dōng tiān", "sentenceEn": "I learned the number two.", "sentenceEs": "Aprendí el número dos.", "radicalHint": "Numbers vocabulary"},
  {"id": 243, "hanzi": "星期一", "pinyin": "xīng qī yī", "tones": [1, 1, 1], "en": "Monday", "es": "Lunes", "emoji": "🔢", "category": "Numbers", "level": "beginner", "sentenceZh": "我学会了数字星期一。", "sentencePinyin": "wǒ xué huì le shù zì xīng qī yī", "sentenceEn": "I learned the number three.", "sentenceEs": "Aprendí el número tres.", "radicalHint": "Numbers vocabulary"},
  {"id": 244, "hanzi": "星期天", "pinyin": "xīng qī tiān", "tones": [1, 1, 1], "en": "Sunday", "es": "Domingo", "emoji": "🔢", "category": "Numbers", "level": "advanced", "sentenceZh": "我学会了数字星期天。", "sentencePinyin": "wǒ xué huì le shù zì xīng qī tiān", "sentenceEn": "I learned the number four.", "sentenceEs": "Aprendí el número cuatro.", "radicalHint": "Numbers vocabulary"},
  {"id": 245, "hanzi": "吃饭", "pinyin": "chī fàn", "tones": [1, 4], "en": "Eat", "es": "Comer", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢吃饭。", "sentencePinyin": "wǒ xǐ huān chī fàn", "sentenceEn": "I like to eat.", "sentenceEs": "Me gusta comer.", "radicalHint": "Verbs vocabulary"},
  {"id": 246, "hanzi": "喝水", "pinyin": "hē shuǐ", "tones": [1, 3], "en": "Drink", "es": "Beber", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢喝水。", "sentencePinyin": "wǒ xǐ huān hē shuǐ", "sentenceEn": "I like to drink.", "sentenceEs": "Me gusta beber.", "radicalHint": "Verbs vocabulary"},
  {"id": 247, "hanzi": "跑步", "pinyin": "pǎo bù", "tones": [3, 4], "en": "Run", "es": "Correr", "emoji": "🏃", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢跑步。", "sentencePinyin": "wǒ xǐ huān pǎo bù", "sentenceEn": "I like to run.", "sentenceEs": "Me gusta correr.", "radicalHint": "Verbs vocabulary"},
  {"id": 248, "hanzi": "跳舞", "pinyin": "tiào wǔ", "tones": [4, 3], "en": "Dance", "es": "Bailar", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢跳舞。", "sentencePinyin": "wǒ xǐ huān tiào wǔ", "sentenceEn": "I like to dance.", "sentenceEs": "Me gusta bailar.", "radicalHint": "Verbs vocabulary"},
  {"id": 249, "hanzi": "睡觉", "pinyin": "shuì jué", "tones": [4, 2], "en": "Sleep", "es": "Dormir", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢睡觉。", "sentencePinyin": "wǒ xǐ huān shuì jué", "sentenceEn": "I like to sleep.", "sentenceEs": "Me gusta dormir.", "radicalHint": "Verbs vocabulary"},
  {"id": 250, "hanzi": "看书", "pinyin": "kàn shū", "tones": [4, 1], "en": "Read", "es": "Leer", "emoji": "🏃", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢看书。", "sentencePinyin": "wǒ xǐ huān kàn shū", "sentenceEn": "I like to read.", "sentenceEs": "Me gusta leer.", "radicalHint": "Verbs vocabulary"},
  {"id": 251, "hanzi": "听音乐", "pinyin": "tīng yīn lè", "tones": [1, 1, 4], "en": "Listen", "es": "Escuchar", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢听音乐。", "sentencePinyin": "wǒ xǐ huān tīng yīn lè", "sentenceEn": "I like to listen.", "sentenceEs": "Me gusta escuchar.", "radicalHint": "Verbs vocabulary"},
  {"id": 252, "hanzi": "说话", "pinyin": "shuō huà", "tones": [1, 4], "en": "Speak", "es": "Hablar", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢说话。", "sentencePinyin": "wǒ xǐ huān shuō huà", "sentenceEn": "I like to speak.", "sentenceEs": "Me gusta hablar.", "radicalHint": "Verbs vocabulary"},
  {"id": 253, "hanzi": "唱歌", "pinyin": "chàng gē", "tones": [4, 1], "en": "Sing", "es": "Cantar", "emoji": "🏃", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢唱歌。", "sentencePinyin": "wǒ xǐ huān chàng gē", "sentenceEn": "I like to sing.", "sentenceEs": "Me gusta cantar.", "radicalHint": "Verbs vocabulary"},
  {"id": 254, "hanzi": "画画", "pinyin": "huà huà", "tones": [4, 4], "en": "Draw", "es": "Dibujar", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢画画。", "sentencePinyin": "wǒ xǐ huān huà huà", "sentenceEn": "I like to draw.", "sentenceEs": "Me gusta dibujar.", "radicalHint": "Verbs vocabulary"},
  {"id": 255, "hanzi": "玩耍", "pinyin": "wán shuǎ", "tones": [2, 3], "en": "Play", "es": "Jugar", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢玩耍。", "sentencePinyin": "wǒ xǐ huān wán shuǎ", "sentenceEn": "I like to eat.", "sentenceEs": "Me gusta comer.", "radicalHint": "Verbs vocabulary"},
  {"id": 256, "hanzi": "游泳", "pinyin": "yóu yǒng", "tones": [2, 3], "en": "Swim", "es": "Nadar", "emoji": "🏃", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢游泳。", "sentencePinyin": "wǒ xǐ huān yóu yǒng", "sentenceEn": "I like to drink.", "sentenceEs": "Me gusta beber.", "radicalHint": "Verbs vocabulary"},
  {"id": 257, "hanzi": "洗手", "pinyin": "xǐ shǒu", "tones": [3, 3], "en": "Wash Hands", "es": "Lavar las Manos", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢洗手。", "sentencePinyin": "wǒ xǐ huān xǐ shǒu", "sentenceEn": "I like to run.", "sentenceEs": "Me gusta correr.", "radicalHint": "Verbs vocabulary"},
  {"id": 258, "hanzi": "拥抱", "pinyin": "yōng bào", "tones": [1, 4], "en": "Hug", "es": "Abrazar", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢拥抱。", "sentencePinyin": "wǒ xǐ huān yōng bào", "sentenceEn": "I like to dance.", "sentenceEs": "Me gusta bailar.", "radicalHint": "Verbs vocabulary"},
  {"id": 259, "hanzi": "微笑", "pinyin": "wēi xiào", "tones": [1, 4], "en": "Smile", "es": "Sonreír", "emoji": "🏃", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢微笑。", "sentencePinyin": "wǒ xǐ huān wēi xiào", "sentenceEn": "I like to sleep.", "sentenceEs": "Me gusta dormir.", "radicalHint": "Verbs vocabulary"},
  {"id": 260, "hanzi": "思考", "pinyin": "sī kǎo", "tones": [1, 3], "en": "Think", "es": "Pensar", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢思考。", "sentencePinyin": "wǒ xǐ huān sī kǎo", "sentenceEn": "I like to read.", "sentenceEs": "Me gusta leer.", "radicalHint": "Verbs vocabulary"},
  {"id": 261, "hanzi": "学习", "pinyin": "xué xí", "tones": [2, 2], "en": "Study", "es": "Estudiar", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢学习。", "sentencePinyin": "wǒ xǐ huān xué xí", "sentenceEn": "I like to listen.", "sentenceEs": "Me gusta escuchar.", "radicalHint": "Verbs vocabulary"},
  {"id": 262, "hanzi": "游戏", "pinyin": "yóu xì", "tones": [2, 4], "en": "Play", "es": "Jugar", "emoji": "🎮", "category": "Verbs", "level": "advanced", "sentenceZh": "我喜欢游戏。", "sentencePinyin": "wǒ xǐ huān yóu xì", "sentenceEn": "I like to speak.", "sentenceEs": "Me gusta hablar.", "radicalHint": "Verbs vocabulary"},
  {"id": 263, "hanzi": "帮忙", "pinyin": "bāng máng", "tones": [1, 2], "en": "Help", "es": "Ayudar", "emoji": "🏃", "category": "Verbs", "level": "beginner", "sentenceZh": "我喜欢帮忙。", "sentencePinyin": "wǒ xǐ huān bāng máng", "sentenceEn": "I like to sing.", "sentenceEs": "Me gusta cantar.", "radicalHint": "Verbs vocabulary"},
  {"id": 264, "hanzi": "运动", "pinyin": "yùn dòng", "tones": [4, 4], "en": "Exercise", "es": "Ejercicio", "emoji": "🏃", "category": "Verbs", "level": "intermediate", "sentenceZh": "我喜欢运动。", "sentencePinyin": "wǒ xǐ huān yùn dòng", "sentenceEn": "I like to draw.", "sentenceEs": "Me gusta dibujar.", "radicalHint": "Verbs vocabulary"},
  {"id": 265, "hanzi": "眼睛", "pinyin": "yǎn jīng", "tones": [3, 1], "en": "Eyes", "es": "Ojos", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的眼睛很重要。", "sentencePinyin": "wǒ de yǎn jīng hěn zhòng yào", "sentenceEn": "My eyes is very important.", "sentenceEs": "Mi ojos es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 266, "hanzi": "耳朵", "pinyin": "ěr duǒ", "tones": [3, 3], "en": "Ears", "es": "Orejas", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的耳朵很重要。", "sentencePinyin": "wǒ de ěr duǒ hěn zhòng yào", "sentenceEn": "My ears is very important.", "sentenceEs": "Mi orejas es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 267, "hanzi": "鼻子", "pinyin": "bí zi", "tones": [2, 0], "en": "Nose", "es": "Nariz", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的鼻子很重要。", "sentencePinyin": "wǒ de bí zi hěn zhòng yào", "sentenceEn": "My nose is very important.", "sentenceEs": "Mi nariz es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 268, "hanzi": "嘴巴", "pinyin": "zuǐ bā", "tones": [3, 1], "en": "Mouth", "es": "Boca", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的嘴巴很重要。", "sentencePinyin": "wǒ de zuǐ bā hěn zhòng yào", "sentenceEn": "My mouth is very important.", "sentenceEs": "Mi boca es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 269, "hanzi": "小手", "pinyin": "xiǎo shǒu", "tones": [3, 3], "en": "Hand", "es": "Mano", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的小手很重要。", "sentencePinyin": "wǒ de xiǎo shǒu hěn zhòng yào", "sentenceEn": "My hand is very important.", "sentenceEs": "Mi mano es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 270, "hanzi": "双脚", "pinyin": "shuāng jiǎo", "tones": [1, 3], "en": "Feet", "es": "Pies", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的双脚很重要。", "sentencePinyin": "wǒ de shuāng jiǎo hěn zhòng yào", "sentenceEn": "My feet is very important.", "sentenceEs": "Mi pies es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 271, "hanzi": "头发", "pinyin": "tóu fā", "tones": [2, 1], "en": "Hair", "es": "Pelo", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的头发很重要。", "sentencePinyin": "wǒ de tóu fā hěn zhòng yào", "sentenceEn": "My hair is very important.", "sentenceEs": "Mi pelo es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 272, "hanzi": "牙齿", "pinyin": "yá chǐ", "tones": [2, 3], "en": "Teeth", "es": "Dientes", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的牙齿很重要。", "sentencePinyin": "wǒ de yá chǐ hěn zhòng yào", "sentenceEn": "My teeth is very important.", "sentenceEs": "Mi dientes es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 273, "hanzi": "笑脸", "pinyin": "xiào liǎn", "tones": [4, 3], "en": "Face", "es": "Cara", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的笑脸很重要。", "sentencePinyin": "wǒ de xiào liǎn hěn zhòng yào", "sentenceEn": "My face is very important.", "sentenceEs": "Mi cara es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 274, "hanzi": "大脑", "pinyin": "dà nǎo", "tones": [4, 3], "en": "Brain", "es": "Cerebro", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的大脑很重要。", "sentencePinyin": "wǒ de dà nǎo hěn zhòng yào", "sentenceEn": "My brain is very important.", "sentenceEs": "Mi cerebro es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 275, "hanzi": "心脏", "pinyin": "xīn zàng", "tones": [1, 4], "en": "Heart", "es": "Corazón", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的心脏很重要。", "sentencePinyin": "wǒ de xīn zàng hěn zhòng yào", "sentenceEn": "My eyes is very important.", "sentenceEs": "Mi ojos es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 276, "hanzi": "胳膊", "pinyin": "gē bó", "tones": [1, 2], "en": "Arm", "es": "Brazo", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的胳膊很重要。", "sentencePinyin": "wǒ de gē bó hěn zhòng yào", "sentenceEn": "My ears is very important.", "sentenceEs": "Mi orejas es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 277, "hanzi": "腿部", "pinyin": "tuǐ bù", "tones": [3, 4], "en": "Leg", "es": "Pierna", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的腿部很重要。", "sentencePinyin": "wǒ de tuǐ bù hěn zhòng yào", "sentenceEn": "My nose is very important.", "sentenceEs": "Mi nariz es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 278, "hanzi": "肚子", "pinyin": "dù zi", "tones": [4, 0], "en": "Belly", "es": "Barriga", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的肚子很重要。", "sentencePinyin": "wǒ de dù zi hěn zhòng yào", "sentenceEn": "My mouth is very important.", "sentenceEs": "Mi boca es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 279, "hanzi": "肩膀", "pinyin": "jiān bǎng", "tones": [1, 3], "en": "Shoulder", "es": "Hombro", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的肩膀很重要。", "sentencePinyin": "wǒ de jiān bǎng hěn zhòng yào", "sentenceEn": "My hand is very important.", "sentenceEs": "Mi mano es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 280, "hanzi": "手指", "pinyin": "shǒu zhǐ", "tones": [3, 3], "en": "Finger", "es": "Dedo", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的手指很重要。", "sentencePinyin": "wǒ de shǒu zhǐ hěn zhòng yào", "sentenceEn": "My feet is very important.", "sentenceEs": "Mi pies es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 281, "hanzi": "脚趾", "pinyin": "jiǎo zhǐ", "tones": [3, 3], "en": "Toe", "es": "Dedo del pie", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的脚趾很重要。", "sentencePinyin": "wǒ de jiǎo zhǐ hěn zhòng yào", "sentenceEn": "My hair is very important.", "sentenceEs": "Mi pelo es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 282, "hanzi": "脸颊", "pinyin": "liǎn jiá", "tones": [3, 2], "en": "Cheek", "es": "Mejilla", "emoji": "🖐️", "category": "Body", "level": "advanced", "sentenceZh": "我的脸颊很重要。", "sentencePinyin": "wǒ de liǎn jiá hěn zhòng yào", "sentenceEn": "My teeth is very important.", "sentenceEs": "Mi dientes es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 283, "hanzi": "下巴", "pinyin": "xià bā", "tones": [4, 1], "en": "Chin", "es": "Barbilla", "emoji": "🖐️", "category": "Body", "level": "beginner", "sentenceZh": "我的下巴很重要。", "sentencePinyin": "wǒ de xià bā hěn zhòng yào", "sentenceEn": "My face is very important.", "sentenceEs": "Mi cara es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 284, "hanzi": "眉毛", "pinyin": "méi máo", "tones": [2, 2], "en": "Eyebrow", "es": "Ceja", "emoji": "🖐️", "category": "Body", "level": "intermediate", "sentenceZh": "我的眉毛很重要。", "sentencePinyin": "wǒ de méi máo hěn zhòng yào", "sentenceEn": "My brain is very important.", "sentenceEs": "Mi cerebro es muy importante.", "radicalHint": "Body vocabulary"},
  {"id": 285, "hanzi": "衣服", "pinyin": "yī fú", "tones": [1, 2], "en": "Clothes", "es": "Ropa", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了衣服。", "sentencePinyin": "jīn tiān wǒ chuān le yī fú", "sentenceEn": "Today I am wearing clothes.", "sentenceEs": "Hoy llevo ropa.", "radicalHint": "Clothes vocabulary"},
  {"id": 286, "hanzi": "裤子", "pinyin": "kù zi", "tones": [4, 0], "en": "Pants", "es": "Pantalones", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了裤子。", "sentencePinyin": "jīn tiān wǒ chuān le kù zi", "sentenceEn": "Today I am wearing pants.", "sentenceEs": "Hoy llevo pantalones.", "radicalHint": "Clothes vocabulary"},
  {"id": 287, "hanzi": "鞋子", "pinyin": "xié zi", "tones": [2, 0], "en": "Shoes", "es": "Zapatos", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了鞋子。", "sentencePinyin": "jīn tiān wǒ chuān le xié zi", "sentenceEn": "Today I am wearing shoes.", "sentenceEs": "Hoy llevo zapatos.", "radicalHint": "Clothes vocabulary"},
  {"id": 288, "hanzi": "帽子", "pinyin": "mào zi", "tones": [4, 0], "en": "Hat", "es": "Sombrero", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了帽子。", "sentencePinyin": "jīn tiān wǒ chuān le mào zi", "sentenceEn": "Today I am wearing hat.", "sentenceEs": "Hoy llevo sombrero.", "radicalHint": "Clothes vocabulary"},
  {"id": 289, "hanzi": "水杯", "pinyin": "shuǐ bēi", "tones": [3, 1], "en": "Cup", "es": "Vaso", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了水杯。", "sentencePinyin": "jīn tiān wǒ chuān le shuǐ bēi", "sentenceEn": "Today I am wearing cup.", "sentenceEs": "Hoy llevo vaso.", "radicalHint": "Clothes vocabulary"},
  {"id": 290, "hanzi": "雨伞", "pinyin": "yǔ sǎn", "tones": [3, 3], "en": "Umbrella", "es": "Paraguas", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了雨伞。", "sentencePinyin": "jīn tiān wǒ chuān le yǔ sǎn", "sentenceEn": "Today I am wearing umbrella.", "sentenceEs": "Hoy llevo paraguas.", "radicalHint": "Clothes vocabulary"},
  {"id": 291, "hanzi": "眼镜", "pinyin": "yǎn jìng", "tones": [3, 4], "en": "Glasses", "es": "Gafas", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了眼镜。", "sentencePinyin": "jīn tiān wǒ chuān le yǎn jìng", "sentenceEn": "Today I am wearing glasses.", "sentenceEs": "Hoy llevo gafas.", "radicalHint": "Clothes vocabulary"},
  {"id": 292, "hanzi": "手套", "pinyin": "shǒu tào", "tones": [3, 4], "en": "Gloves", "es": "Guantes", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了手套。", "sentencePinyin": "jīn tiān wǒ chuān le shǒu tào", "sentenceEn": "Today I am wearing gloves.", "sentenceEs": "Hoy llevo guantes.", "radicalHint": "Clothes vocabulary"},
  {"id": 293, "hanzi": "围巾", "pinyin": "wéi jīn", "tones": [2, 1], "en": "Scarf", "es": "Bufanda", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了围巾。", "sentencePinyin": "jīn tiān wǒ chuān le wéi jīn", "sentenceEn": "Today I am wearing scarf.", "sentenceEs": "Hoy llevo bufanda.", "radicalHint": "Clothes vocabulary"},
  {"id": 294, "hanzi": "裙子", "pinyin": "qún zi", "tones": [2, 0], "en": "Dress", "es": "Vestido", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了裙子。", "sentencePinyin": "jīn tiān wǒ chuān le qún zi", "sentenceEn": "Today I am wearing dress.", "sentenceEs": "Hoy llevo vestido.", "radicalHint": "Clothes vocabulary"},
  {"id": 295, "hanzi": "外套", "pinyin": "wài tào", "tones": [4, 4], "en": "Coat", "es": "Abrigo", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了外套。", "sentencePinyin": "jīn tiān wǒ chuān le wài tào", "sentenceEn": "Today I am wearing clothes.", "sentenceEs": "Hoy llevo ropa.", "radicalHint": "Clothes vocabulary"},
  {"id": 296, "hanzi": "袜子", "pinyin": "wà zi", "tones": [4, 0], "en": "Socks", "es": "Calcetines", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了袜子。", "sentencePinyin": "jīn tiān wǒ chuān le wà zi", "sentenceEn": "Today I am wearing pants.", "sentenceEs": "Hoy llevo pantalones.", "radicalHint": "Clothes vocabulary"},
  {"id": 297, "hanzi": "包包", "pinyin": "bāo bāo", "tones": [1, 1], "en": "Bag", "es": "Bolso", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了包包。", "sentencePinyin": "jīn tiān wǒ chuān le bāo bāo", "sentenceEn": "Today I am wearing shoes.", "sentenceEs": "Hoy llevo zapatos.", "radicalHint": "Clothes vocabulary"},
  {"id": 298, "hanzi": "短裤", "pinyin": "duǎn kù", "tones": [3, 4], "en": "Shorts", "es": "Pantalones Cortos", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了短裤。", "sentencePinyin": "jīn tiān wǒ chuān le duǎn kù", "sentenceEn": "Today I am wearing cup.", "sentenceEs": "Hoy llevo vaso.", "radicalHint": "Clothes vocabulary"},
  {"id": 299, "hanzi": "长裙", "pinyin": "zhǎng qún", "tones": [3, 2], "en": "Long Dress", "es": "Vestido Largo", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了长裙。", "sentencePinyin": "jīn tiān wǒ chuān le zhǎng qún", "sentenceEn": "Today I am wearing umbrella.", "sentenceEs": "Hoy llevo paraguas.", "radicalHint": "Clothes vocabulary"},
  {"id": 300, "hanzi": "皮鞋", "pinyin": "pí xié", "tones": [2, 2], "en": "Leather Shoes", "es": "Zapatos de Cuero", "emoji": "👕", "category": "Clothes", "level": "beginner", "sentenceZh": "今天我穿了皮鞋。", "sentencePinyin": "jīn tiān wǒ chuān le pí xié", "sentenceEn": "Today I am wearing glasses.", "sentenceEs": "Hoy llevo gafas.", "radicalHint": "Clothes vocabulary"},
  {"id": 301, "hanzi": "运动鞋", "pinyin": "yùn dòng xié", "tones": [4, 4, 2], "en": "Sneakers", "es": "Zapatos Deportivos", "emoji": "👕", "category": "Clothes", "level": "advanced", "sentenceZh": "今天我穿了运动鞋。", "sentencePinyin": "jīn tiān wǒ chuān le yùn dòng xié", "sentenceEn": "Today I am wearing gloves.", "sentenceEs": "Hoy llevo guantes.", "radicalHint": "Clothes vocabulary"},
  {"id": 302, "hanzi": "项链", "pinyin": "xiàng liàn", "tones": [4, 4], "en": "Necklace", "es": "Collile", "emoji": "👕", "category": "Clothes", "level": "intermediate", "sentenceZh": "今天我穿了项链。", "sentencePinyin": "jīn tiān wǒ chuān le xiàng liàn", "sentenceEn": "Today I am wearing dress.", "sentenceEs": "Hoy llevo vestido.", "radicalHint": "Clothes vocabulary"},
  {"id": 303, "hanzi": "房间", "pinyin": "fáng jiān", "tones": [2, 1], "en": "Room", "es": "Habitación", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个房间。", "sentencePinyin": "jiā lǐ yǒu yī gè fáng jiān", "sentenceEn": "There is a room at home.", "sentenceEs": "Hay un habitación en casa.", "radicalHint": "Home vocabulary"},
  {"id": 304, "hanzi": "厨房", "pinyin": "chú fáng", "tones": [2, 2], "en": "Kitchen", "es": "Cocina", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个厨房。", "sentencePinyin": "jiā lǐ yǒu yī gè chú fáng", "sentenceEn": "There is a kitchen at home.", "sentenceEs": "Hay un cocina en casa.", "radicalHint": "Home vocabulary"},
  {"id": 305, "hanzi": "浴室", "pinyin": "yù shì", "tones": [4, 4], "en": "Bathroom", "es": "Baño", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个浴室。", "sentencePinyin": "jiā lǐ yǒu yī gè yù shì", "sentenceEn": "There is a bathroom at home.", "sentenceEs": "Hay un baño en casa.", "radicalHint": "Home vocabulary"},
  {"id": 306, "hanzi": "沙发", "pinyin": "shā fā", "tones": [1, 1], "en": "Sofa", "es": "Sofá", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个沙发。", "sentencePinyin": "jiā lǐ yǒu yī gè shā fā", "sentenceEn": "There is a sofa at home.", "sentenceEs": "Hay un sofá en casa.", "radicalHint": "Home vocabulary"},
  {"id": 307, "hanzi": "大床", "pinyin": "dà chuáng", "tones": [4, 2], "en": "Bed", "es": "Cama", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个大床。", "sentencePinyin": "jiā lǐ yǒu yī gè dà chuáng", "sentenceEn": "There is a bed at home.", "sentenceEs": "Hay un cama en casa.", "radicalHint": "Home vocabulary"},
  {"id": 308, "hanzi": "电视", "pinyin": "diàn shì", "tones": [4, 4], "en": "TV", "es": "Televisión", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个电视。", "sentencePinyin": "jiā lǐ yǒu yī gè diàn shì", "sentenceEn": "There is a tv at home.", "sentenceEs": "Hay un televisión en casa.", "radicalHint": "Home vocabulary"},
  {"id": 309, "hanzi": "冰箱", "pinyin": "bīng xiāng", "tones": [1, 1], "en": "Fridge", "es": "Nevera", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个冰箱。", "sentencePinyin": "jiā lǐ yǒu yī gè bīng xiāng", "sentenceEn": "There is a fridge at home.", "sentenceEs": "Hay un nevera en casa.", "radicalHint": "Home vocabulary"},
  {"id": 310, "hanzi": "台灯", "pinyin": "tái dēng", "tones": [2, 1], "en": "Lamp", "es": "Lámpara", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个台灯。", "sentencePinyin": "jiā lǐ yǒu yī gè tái dēng", "sentenceEn": "There is a lamp at home.", "sentenceEs": "Hay un lámpara en casa.", "radicalHint": "Home vocabulary"},
  {"id": 311, "hanzi": "镜子", "pinyin": "jìng zi", "tones": [4, 0], "en": "Mirror", "es": "Espejo", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个镜子。", "sentencePinyin": "jiā lǐ yǒu yī gè jìng zi", "sentenceEn": "There is a mirror at home.", "sentenceEs": "Hay un espejo en casa.", "radicalHint": "Home vocabulary"},
  {"id": 312, "hanzi": "钥匙", "pinyin": "yào shi", "tones": [4, 0], "en": "Key", "es": "Llave", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个钥匙。", "sentencePinyin": "jiā lǐ yǒu yī gè yào shi", "sentenceEn": "There is a key at home.", "sentenceEs": "Hay un llave en casa.", "radicalHint": "Home vocabulary"},
  {"id": 313, "hanzi": "电话", "pinyin": "diàn huà", "tones": [4, 4], "en": "Telephone", "es": "Teléfono", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个电话。", "sentencePinyin": "jiā lǐ yǒu yī gè diàn huà", "sentenceEn": "There is a room at home.", "sentenceEs": "Hay un habitación en casa.", "radicalHint": "Home vocabulary"},
  {"id": 314, "hanzi": "空调", "pinyin": "kōng diào", "tones": [1, 4], "en": "Air Conditioner", "es": "Aire Acondicionado", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个空调。", "sentencePinyin": "jiā lǐ yǒu yī gè kōng diào", "sentenceEn": "There is a kitchen at home.", "sentenceEs": "Hay un cocina en casa.", "radicalHint": "Home vocabulary"},
  {"id": 315, "hanzi": "洗衣机", "pinyin": "xǐ yī jī", "tones": [3, 1, 1], "en": "Washing Machine", "es": "Lavadora", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个洗衣机。", "sentencePinyin": "jiā lǐ yǒu yī gè xǐ yī jī", "sentenceEn": "There is a bathroom at home.", "sentenceEs": "Hay un baño en casa.", "radicalHint": "Home vocabulary"},
  {"id": 316, "hanzi": "衣柜", "pinyin": "yī guì", "tones": [1, 4], "en": "Wardrobe", "es": "Armario", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个衣柜。", "sentencePinyin": "jiā lǐ yǒu yī gè yī guì", "sentenceEn": "There is a sofa at home.", "sentenceEs": "Hay un sofá en casa.", "radicalHint": "Home vocabulary"},
  {"id": 317, "hanzi": "地毯", "pinyin": "dì tǎn", "tones": [4, 3], "en": "Carpet", "es": "Alfombra", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个地毯。", "sentencePinyin": "jiā lǐ yǒu yī gè dì tǎn", "sentenceEn": "There is a bed at home.", "sentenceEs": "Hay un cama en casa.", "radicalHint": "Home vocabulary"},
  {"id": 318, "hanzi": "餐桌", "pinyin": "cān zhuō", "tones": [1, 1], "en": "Dining Table", "es": "Mesa", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个餐桌。", "sentencePinyin": "jiā lǐ yǒu yī gè cān zhuō", "sentenceEn": "There is a tv at home.", "sentenceEs": "Hay un televisión en casa.", "radicalHint": "Home vocabulary"},
  {"id": 319, "hanzi": "阳台", "pinyin": "yáng tái", "tones": [2, 2], "en": "Balcony", "es": "Balcón", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个阳台。", "sentencePinyin": "jiā lǐ yǒu yī gè yáng tái", "sentenceEn": "There is a fridge at home.", "sentenceEs": "Hay un nevera en casa.", "radicalHint": "Home vocabulary"},
  {"id": 320, "hanzi": "花瓶", "pinyin": "huā píng", "tones": [1, 2], "en": "Vase", "es": "Florero", "emoji": "🏠", "category": "Home", "level": "advanced", "sentenceZh": "家里有一个花瓶。", "sentencePinyin": "jiā lǐ yǒu yī gè huā píng", "sentenceEn": "There is a lamp at home.", "sentenceEs": "Hay un lámpara en casa.", "radicalHint": "Home vocabulary"},
  {"id": 321, "hanzi": "闹钟", "pinyin": "nào zhōng", "tones": [4, 1], "en": "Alarm Clock", "es": "Despertador", "emoji": "🏠", "category": "Home", "level": "beginner", "sentenceZh": "家里有一个闹钟。", "sentencePinyin": "jiā lǐ yǒu yī gè nào zhōng", "sentenceEn": "There is a mirror at home.", "sentenceEs": "Hay un espejo en casa.", "radicalHint": "Home vocabulary"},
  {"id": 322, "hanzi": "相框", "pinyin": "xiāng kuāng", "tones": [1, 1], "en": "Photo Frame", "es": "Marco de Foto", "emoji": "🏠", "category": "Home", "level": "intermediate", "sentenceZh": "家里有一个相框。", "sentencePinyin": "jiā lǐ yǒu yī gè xiāng kuāng", "sentenceEn": "There is a key at home.", "sentenceEs": "Hay un llave en casa.", "radicalHint": "Home vocabulary"},
  {"id": 323, "hanzi": "足球", "pinyin": "zú qiú", "tones": [2, 2], "en": "Soccer", "es": "Fútbol", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢足球。", "sentencePinyin": "wǒ xǐ huān zú qiú", "sentenceEn": "I like soccer.", "sentenceEs": "Me gusta el fútbol.", "radicalHint": "Sports vocabulary"},
  {"id": 324, "hanzi": "篮球", "pinyin": "lán qiú", "tones": [2, 2], "en": "Basketball", "es": "Baloncesto", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢篮球。", "sentencePinyin": "wǒ xǐ huān lán qiú", "sentenceEn": "I like basketball.", "sentenceEs": "Me gusta el baloncesto.", "radicalHint": "Sports vocabulary"},
  {"id": 325, "hanzi": "乒乓球", "pinyin": "pīng pāng qiú", "tones": [1, 1, 2], "en": "Ping Pong", "es": "Ping-pong", "emoji": "⚽", "category": "Sports", "level": "advanced", "sentenceZh": "我喜欢乒乓球。", "sentencePinyin": "wǒ xǐ huān pīng pāng qiú", "sentenceEn": "I like ping pong.", "sentenceEs": "Me gusta el ping-pong.", "radicalHint": "Sports vocabulary"},
  {"id": 326, "hanzi": "钢琴", "pinyin": "gāng qín", "tones": [1, 2], "en": "Piano", "es": "Piano", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢钢琴。", "sentencePinyin": "wǒ xǐ huān gāng qín", "sentenceEn": "I like piano.", "sentenceEs": "Me gusta el piano.", "radicalHint": "Sports vocabulary"},
  {"id": 327, "hanzi": "吉他", "pinyin": "jí tā", "tones": [2, 1], "en": "Guitar", "es": "Guitarra", "emoji": "⚽", "category": "Sports", "level": "advanced", "sentenceZh": "我喜欢吉他。", "sentencePinyin": "wǒ xǐ huān jí tā", "sentenceEn": "I like guitar.", "sentenceEs": "Me gusta el guitarra.", "radicalHint": "Sports vocabulary"},
  {"id": 328, "hanzi": "绘画", "pinyin": "huì huà", "tones": [4, 4], "en": "Art", "es": "Arte", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢绘画。", "sentencePinyin": "wǒ xǐ huān huì huà", "sentenceEn": "I like art.", "sentenceEs": "Me gusta el arte.", "radicalHint": "Sports vocabulary"},
  {"id": 329, "hanzi": "阅读", "pinyin": "yuè dú", "tones": [4, 2], "en": "Reading", "es": "Lectura", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢阅读。", "sentencePinyin": "wǒ xǐ huān yuè dú", "sentenceEn": "I like reading.", "sentenceEs": "Me gusta el lectura.", "radicalHint": "Sports vocabulary"},
  {"id": 330, "hanzi": "轮滑", "pinyin": "lún huá", "tones": [2, 2], "en": "Skate", "es": "Patinaje", "emoji": "⚽", "category": "Sports", "level": "advanced", "sentenceZh": "我喜欢轮滑。", "sentencePinyin": "wǒ xǐ huān lún huá", "sentenceEn": "I like skate.", "sentenceEs": "Me gusta el patinaje.", "radicalHint": "Sports vocabulary"},
  {"id": 331, "hanzi": "滑雪", "pinyin": "huá xuě", "tones": [2, 3], "en": "Ski", "es": "Esquí", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢滑雪。", "sentencePinyin": "wǒ xǐ huān huá xuě", "sentenceEn": "I like ski.", "sentenceEs": "Me gusta el esquí.", "radicalHint": "Sports vocabulary"},
  {"id": 332, "hanzi": "羽毛球", "pinyin": "yǔ máo qiú", "tones": [3, 2, 2], "en": "Badminton", "es": "Bádminton", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢羽毛球。", "sentencePinyin": "wǒ xǐ huān yǔ máo qiú", "sentenceEn": "I like soccer.", "sentenceEs": "Me gusta el fútbol.", "radicalHint": "Sports vocabulary"},
  {"id": 333, "hanzi": "网球", "pinyin": "wǎng qiú", "tones": [3, 2], "en": "Tennis", "es": "Tenis", "emoji": "⚽", "category": "Sports", "level": "advanced", "sentenceZh": "我喜欢网球。", "sentencePinyin": "wǒ xǐ huān wǎng qiú", "sentenceEn": "I like basketball.", "sentenceEs": "Me gusta el baloncesto.", "radicalHint": "Sports vocabulary"},
  {"id": 334, "hanzi": "排球", "pinyin": "pái qiú", "tones": [2, 2], "en": "Volleyball", "es": "Voleibol", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢排球。", "sentencePinyin": "wǒ xǐ huān pái qiú", "sentenceEn": "I like ping pong.", "sentenceEs": "Me gusta el ping-pong.", "radicalHint": "Sports vocabulary"},
  {"id": 335, "hanzi": "跳绳", "pinyin": "tiào shéng", "tones": [4, 2], "en": "Jump Rope", "es": "Salto de Soga", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢跳绳。", "sentencePinyin": "wǒ xǐ huān tiào shéng", "sentenceEn": "I like swim.", "sentenceEs": "Me gusta el natación.", "radicalHint": "Sports vocabulary"},
  {"id": 336, "hanzi": "摔跤", "pinyin": "shuāi jiāo", "tones": [1, 1], "en": "Guitar", "es": "Guitarra", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢摔跤。", "sentencePinyin": "wǒ xǐ huān shuāi jiāo", "sentenceEn": "I like guitar.", "sentenceEs": "Me gusta el guitarra.", "radicalHint": "Sports vocabulary"},
  {"id": 337, "hanzi": "体操", "pinyin": "tǐ cāo", "tones": [3, 1], "en": "Gymnastics", "es": "Gimnasia", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢体操。", "sentencePinyin": "wǒ xǐ huān tǐ cāo", "sentenceEn": "I like art.", "sentenceEs": "Me gusta el arte.", "radicalHint": "Sports vocabulary"},
  {"id": 338, "hanzi": "棋艺", "pinyin": "qí yì", "tones": [2, 4], "en": "Chess", "es": "Ajedrez", "emoji": "⚽", "category": "Sports", "level": "advanced", "sentenceZh": "我喜欢棋艺。", "sentencePinyin": "wǒ xǐ huān qí yì", "sentenceEn": "I like reading.", "sentenceEs": "Me gusta el lectura.", "radicalHint": "Sports vocabulary"},
  {"id": 339, "hanzi": "书法", "pinyin": "shū fǎ", "tones": [1, 3], "en": "Calligraphy", "es": "Caligrafía", "emoji": "⚽", "category": "Sports", "level": "beginner", "sentenceZh": "我喜欢书法。", "sentencePinyin": "wǒ xǐ huān shū fǎ", "sentenceEn": "I like skate.", "sentenceEs": "Me gusta el patinaje.", "radicalHint": "Sports vocabulary"},
  {"id": 340, "hanzi": "武术", "pinyin": "wǔ shù", "tones": [3, 4], "en": "Martial Arts", "es": "Artes Marciales", "emoji": "⚽", "category": "Sports", "level": "intermediate", "sentenceZh": "我喜欢武术。", "sentencePinyin": "wǒ xǐ huān wǔ shù", "sentenceEn": "I like ski.", "sentenceEs": "Me gusta el esquí.", "radicalHint": "Sports vocabulary"},
  {"id": 341, "hanzi": "公园", "pinyin": "gōng yuán", "tones": [1, 2], "en": "Park", "es": "Parque", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去公园玩吧！", "sentencePinyin": "wǒ men qù gōng yuán wán ba", "sentenceEn": "Let's go to the park!", "sentenceEs": "¡Vamos al parque!", "radicalHint": "Places vocabulary"},
  {"id": 342, "hanzi": "动物园", "pinyin": "dòng wù yuán", "tones": [4, 4, 2], "en": "Zoo", "es": "Zoológico", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去动物园玩吧！", "sentencePinyin": "wǒ men qù dòng wù yuán wán ba", "sentenceEn": "Let's go to the zoo!", "sentenceEs": "¡Vamos al zoológico!", "radicalHint": "Places vocabulary"},
  {"id": 343, "hanzi": "学校", "pinyin": "xué xiào", "tones": [2, 4], "en": "School", "es": "Escuela", "emoji": "📍", "category": "Places", "level": "advanced", "sentenceZh": "我们去学校玩吧！", "sentencePinyin": "wǒ men qù xué xiào wán ba", "sentenceEn": "Let's go to the school!", "sentenceEs": "¡Vamos al escuela!", "radicalHint": "Places vocabulary"},
  {"id": 344, "hanzi": "医院", "pinyin": "yī yuàn", "tones": [1, 4], "en": "Hospital", "es": "Hospital", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去医院玩吧！", "sentencePinyin": "wǒ men qù yī yuàn wán ba", "sentenceEn": "Let's go to the hospital!", "sentenceEs": "¡Vamos al hospital!", "radicalHint": "Places vocabulary"},
  {"id": 345, "hanzi": "超市", "pinyin": "chāo shì", "tones": [1, 4], "en": "Supermarket", "es": "Supermercado", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去超市玩吧！", "sentencePinyin": "wǒ men qù chāo shì wán ba", "sentenceEn": "Let's go to the supermarket!", "sentenceEs": "¡Vamos al supermercado!", "radicalHint": "Places vocabulary"},
  {"id": 346, "hanzi": "游乐场", "pinyin": "yóu lè chǎng", "tones": [2, 4, 3], "en": "Amusement Park", "es": "Parque de Atracciones", "emoji": "📍", "category": "Places", "level": "advanced", "sentenceZh": "我们去游乐场玩吧！", "sentencePinyin": "wǒ men qù yóu lè chǎng wán ba", "sentenceEn": "Let's go to the amusement park!", "sentenceEs": "¡Vamos al parque de atracciones!", "radicalHint": "Places vocabulary"},
  {"id": 347, "hanzi": "飞机场", "pinyin": "fēi jī chǎng", "tones": [1, 1, 3], "en": "Airport", "es": "Aeropuerto", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去飞机场玩吧！", "sentencePinyin": "wǒ men qù fēi jī chǎng wán ba", "sentenceEn": "Let's go to the airport!", "sentenceEs": "¡Vamos al aeropuerto!", "radicalHint": "Places vocabulary"},
  {"id": 348, "hanzi": "车站", "pinyin": "chē zhàn", "tones": [1, 4], "en": "Station", "es": "Estación", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去车站玩吧！", "sentencePinyin": "wǒ men qù chē zhàn wán ba", "sentenceEn": "Let's go to the station!", "sentenceEs": "¡Vamos al estación!", "radicalHint": "Places vocabulary"},
  {"id": 349, "hanzi": "博物馆", "pinyin": "bó wù guǎn", "tones": [2, 4, 3], "en": "Museum", "es": "Museo", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去博物馆玩吧！", "sentencePinyin": "wǒ men qù bó wù guǎn wán ba", "sentenceEn": "Let's go to the museum!", "sentenceEs": "¡Vamos al museo!", "radicalHint": "Places vocabulary"},
  {"id": 350, "hanzi": "电影院", "pinyin": "diàn yǐng yuàn", "tones": [4, 3, 4], "en": "Cinema", "es": "Cine", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去电影院玩吧！", "sentencePinyin": "wǒ men qù diàn yǐng yuàn wán ba", "sentenceEn": "Let's go to the park!", "sentenceEs": "¡Vamos al parque!", "radicalHint": "Places vocabulary"},
  {"id": 351, "hanzi": "图书馆", "pinyin": "tú shū guǎn", "tones": [2, 1, 3], "en": "Library", "es": "Biblioteca", "emoji": "📍", "category": "Places", "level": "advanced", "sentenceZh": "我们去图书馆玩吧！", "sentencePinyin": "wǒ men qù tú shū guǎn wán ba", "sentenceEn": "Let's go to the zoo!", "sentenceEs": "¡Vamos al zoológico!", "radicalHint": "Places vocabulary"},
  {"id": 352, "hanzi": "餐厅", "pinyin": "cān tīng", "tones": [1, 1], "en": "Restaurant", "es": "Restaurante", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去餐厅玩吧！", "sentencePinyin": "wǒ men qù cān tīng wán ba", "sentenceEn": "Let's go to the school!", "sentenceEs": "¡Vamos al escuela!", "radicalHint": "Places vocabulary"},
  {"id": 353, "hanzi": "植物园", "pinyin": "zhí wù yuán", "tones": [2, 4, 2], "en": "Botanical Garden", "es": "Jardín Botánico", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去植物园玩吧！", "sentencePinyin": "wǒ men qù zhí wù yuán wán ba", "sentenceEn": "Let's go to the hospital!", "sentenceEs": "¡Vamos al hospital!", "radicalHint": "Places vocabulary"},
  {"id": 354, "hanzi": "科学馆", "pinyin": "kē xué guǎn", "tones": [1, 2, 3], "en": "Science Museum", "es": "Museo de Ciencia", "emoji": "📍", "category": "Places", "level": "advanced", "sentenceZh": "我们去科学馆玩吧！", "sentencePinyin": "wǒ men qù kē xué guǎn wán ba", "sentenceEn": "Let's go to the supermarket!", "sentenceEs": "¡Vamos al supermercado!", "radicalHint": "Places vocabulary"},
  {"id": 355, "hanzi": "城堡", "pinyin": "chéng bǎo", "tones": [2, 3], "en": "Castle", "es": "Castillo", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去城堡玩吧！", "sentencePinyin": "wǒ men qù chéng bǎo wán ba", "sentenceEn": "Let's go to the amusement park!", "sentenceEs": "¡Vamos al parque de atracciones!", "radicalHint": "Places vocabulary"},
  {"id": 356, "hanzi": "农场", "pinyin": "nóng chǎng", "tones": [2, 3], "en": "Farm", "es": "Granja", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去农场玩吧！", "sentencePinyin": "wǒ men qù nóng chǎng wán ba", "sentenceEn": "Let's go to the airport!", "sentenceEs": "¡Vamos al aeropuerto!", "radicalHint": "Places vocabulary"},
  {"id": 357, "hanzi": "商场", "pinyin": "shāng chǎng", "tones": [1, 3], "en": "Mall", "es": "Centro Comercial", "emoji": "📍", "category": "Places", "level": "advanced", "sentenceZh": "我们去商场玩吧！", "sentencePinyin": "wǒ men qù shāng chǎng wán ba", "sentenceEn": "Let's go to the station!", "sentenceEs": "¡Vamos al estación!", "radicalHint": "Places vocabulary"},
  {"id": 358, "hanzi": "水族馆", "pinyin": "shuǐ zú guǎn", "tones": [3, 2, 3], "en": "Aquarium", "es": "Acuario", "emoji": "📍", "category": "Places", "level": "beginner", "sentenceZh": "我们去水族馆玩吧！", "sentencePinyin": "wǒ men qù shuǐ zú guǎn wán ba", "sentenceEn": "Let's go to the beach!", "sentenceEs": "¡Vamos al playa!", "radicalHint": "Places vocabulary"},
  {"id": 359, "hanzi": "体育馆", "pinyin": "tǐ yù guǎn", "tones": [3, 4, 3], "en": "Gymnasium", "es": "Gimnasio", "emoji": "📍", "category": "Places", "level": "intermediate", "sentenceZh": "我们去体育馆玩吧！", "sentencePinyin": "wǒ men qù tǐ yù guǎn wán ba", "sentenceEn": "Let's go to the museum!", "sentenceEs": "¡Vamos al museo!", "radicalHint": "Places vocabulary"},
  {"id": 360, "hanzi": "大", "pinyin": "dà", "tones": [4], "en": "Big", "es": "Grande", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真大！", "sentencePinyin": "xiǎo xióng māo zhēn dà", "sentenceEn": "The little panda is so big!", "sentenceEs": "¡El pequeño panda es muy grande!", "radicalHint": "Adjectives vocabulary"},
  {"id": 361, "hanzi": "小", "pinyin": "xiǎo", "tones": [3], "en": "Small", "es": "Pequeño", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真小！", "sentencePinyin": "xiǎo xióng māo zhēn xiǎo", "sentenceEn": "The little panda is so small!", "sentenceEs": "¡El pequeño panda es muy pequeño!", "radicalHint": "Adjectives vocabulary"},
  {"id": 362, "hanzi": "多", "pinyin": "duō", "tones": [1], "en": "Many", "es": "Muchos", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真多！", "sentencePinyin": "xiǎo xióng māo zhēn duō", "sentenceEn": "The little panda is so many!", "sentenceEs": "¡El pequeño panda es muy muchos!", "radicalHint": "Adjectives vocabulary"},
  {"id": 363, "hanzi": "少", "pinyin": "shǎo", "tones": [3], "en": "Few", "es": "Pocos", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真少！", "sentencePinyin": "xiǎo xióng māo zhēn shǎo", "sentenceEn": "The little panda is so few!", "sentenceEs": "¡El pequeño panda es muy pocos!", "radicalHint": "Adjectives vocabulary"},
  {"id": 364, "hanzi": "高", "pinyin": "gāo", "tones": [1], "en": "Tall", "es": "Alto", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真高！", "sentencePinyin": "xiǎo xióng māo zhēn gāo", "sentenceEn": "The little panda is so tall!", "sentenceEs": "¡El pequeño panda es muy alto!", "radicalHint": "Adjectives vocabulary"},
  {"id": 365, "hanzi": "矮", "pinyin": "ǎi", "tones": [3], "en": "Short", "es": "Bajo", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真矮！", "sentencePinyin": "xiǎo xióng māo zhēn ǎi", "sentenceEn": "The little panda is so short!", "sentenceEs": "¡El pequeño panda es muy bajo!", "radicalHint": "Adjectives vocabulary"},
  {"id": 366, "hanzi": "快", "pinyin": "kuài", "tones": [4], "en": "Fast", "es": "Rápido", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真快！", "sentencePinyin": "xiǎo xióng māo zhēn kuài", "sentenceEn": "The little panda is so fast!", "sentenceEs": "¡El pequeño panda es muy rápido!", "radicalHint": "Adjectives vocabulary"},
  {"id": 367, "hanzi": "慢", "pinyin": "màn", "tones": [4], "en": "Slow", "es": "Lento", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真慢！", "sentencePinyin": "xiǎo xióng māo zhēn màn", "sentenceEn": "The little panda is so slow!", "sentenceEs": "¡El pequeño panda es muy lento!", "radicalHint": "Adjectives vocabulary"},
  {"id": 368, "hanzi": "快乐", "pinyin": "kuài lè", "tones": [4, 4], "en": "Happy", "es": "Feliz", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真快乐！", "sentencePinyin": "xiǎo xióng māo zhēn kuài lè", "sentenceEn": "The little panda is so happy!", "sentenceEs": "¡El pequeño panda es muy feliz!", "radicalHint": "Adjectives vocabulary"},
  {"id": 369, "hanzi": "伤心", "pinyin": "shāng xīn", "tones": [1, 1], "en": "Sad", "es": "Triste", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真伤心！", "sentencePinyin": "xiǎo xióng māo zhēn shāng xīn", "sentenceEn": "The little panda is so cute!", "sentenceEs": "¡El pequeño panda es muy lindo!", "radicalHint": "Adjectives vocabulary"},
  {"id": 370, "hanzi": "美丽", "pinyin": "měi lì", "tones": [3, 4], "en": "Beautiful", "es": "Hermoso", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真美丽！", "sentencePinyin": "xiǎo xióng māo zhēn měi lì", "sentenceEn": "The little panda is so big!", "sentenceEs": "¡El pequeño panda es muy grande!", "radicalHint": "Adjectives vocabulary"},
  {"id": 371, "hanzi": "可爱", "pinyin": "kě ài", "tones": [3, 4], "en": "Cute", "es": "Lindo", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真可爱！", "sentencePinyin": "xiǎo xióng māo zhēn kě ài", "sentenceEn": "The little panda is so small!", "sentenceEs": "¡El pequeño panda es muy pequeño!", "radicalHint": "Adjectives vocabulary"},
  {"id": 372, "hanzi": "干净", "pinyin": "gàn jìng", "tones": [4, 4], "en": "Clean", "es": "Limpio", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真干净！", "sentencePinyin": "xiǎo xióng māo zhēn gàn jìng", "sentenceEn": "The little panda is so many!", "sentenceEs": "¡El pequeño panda es muy muchos!", "radicalHint": "Adjectives vocabulary"},
  {"id": 373, "hanzi": "勇敢", "pinyin": "yǒng gǎn", "tones": [3, 3], "en": "Brave", "es": "Valiente", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真勇敢！", "sentencePinyin": "xiǎo xióng māo zhēn yǒng gǎn", "sentenceEn": "The little panda is so few!", "sentenceEs": "¡El pequeño panda es muy pocos!", "radicalHint": "Adjectives vocabulary"},
  {"id": 374, "hanzi": "聪明", "pinyin": "cōng míng", "tones": [1, 2], "en": "Clever", "es": "Inteligente", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真聪明！", "sentencePinyin": "xiǎo xióng māo zhēn cōng míng", "sentenceEn": "The little panda is so tall!", "sentenceEs": "¡El pequeño panda es muy alto!", "radicalHint": "Adjectives vocabulary"},
  {"id": 375, "hanzi": "温柔", "pinyin": "wēn róu", "tones": [1, 2], "en": "Gentle", "es": "Gentil", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真温柔！", "sentencePinyin": "xiǎo xióng māo zhēn wēn róu", "sentenceEn": "The little panda is so short!", "sentenceEs": "¡El pequeño panda es muy bajo!", "radicalHint": "Adjectives vocabulary"},
  {"id": 376, "hanzi": "热情", "pinyin": "rè qíng", "tones": [4, 2], "en": "Warm", "es": "Cariñoso", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真热情！", "sentencePinyin": "xiǎo xióng māo zhēn rè qíng", "sentenceEn": "The little panda is so fast!", "sentenceEs": "¡El pequeño panda es muy rápido!", "radicalHint": "Adjectives vocabulary"},
  {"id": 377, "hanzi": "神奇", "pinyin": "shén qí", "tones": [2, 2], "en": "Magical", "es": "Mágico", "emoji": "🌟", "category": "Adjectives", "level": "advanced", "sentenceZh": "小熊猫真神奇！", "sentencePinyin": "xiǎo xióng māo zhēn shén qí", "sentenceEn": "The little panda is so slow!", "sentenceEs": "¡El pequeño panda es muy lento!", "radicalHint": "Adjectives vocabulary"},
  {"id": 378, "hanzi": "开心", "pinyin": "kāi xīn", "tones": [1, 1], "en": "Cheerful", "es": "Alegre", "emoji": "🌟", "category": "Adjectives", "level": "beginner", "sentenceZh": "小熊猫真开心！", "sentencePinyin": "xiǎo xióng māo zhēn kāi xīn", "sentenceEn": "The little panda is so happy!", "sentenceEs": "¡El pequeño panda es muy feliz!", "radicalHint": "Adjectives vocabulary"},
  {"id": 379, "hanzi": "强壮", "pinyin": "qiáng zhuàng", "tones": [2, 4], "en": "Strong", "es": "Fuerte", "emoji": "🌟", "category": "Adjectives", "level": "intermediate", "sentenceZh": "小熊猫真强壮！", "sentencePinyin": "xiǎo xióng māo zhēn qiáng zhuàng", "sentenceEn": "The little panda is so cute!", "sentenceEs": "¡El pequeño panda es muy lindo!", "radicalHint": "Adjectives vocabulary"}
];
;

// STATE MANAGEMENT
let appState = {
  langBase: "en", // "en" (English Base) or "es" (Spanish Base)
  userName: "Leo Explorer",
  currentTab: "dashboard",
  searchQuery: "",
  activeLevel: "all",
  activeCategory: "all",
  cardsDisplayedCount: 12,
  userStreakDays: 5,
  userStars: 180,
  quizMode: "meaning", // "meaning", "audio", "pinyin"
  quizNoTimeLimit: false,
  quizCurrentIndex: 0,
  quizScore: 0,
  checkinClaimedDays: [],
  lastCheckinDate: null,
  favorites: [],
  activeFilter: "all",
  learnedWordIds: [],
  speechRate: 0.85,
  unlockedBadges: [],
  totalCardsFlipped: 0,
  totalQuizCorrect: 0,
  totalQuizAnswered: 0,
  quizStreak: 0,
  userAvatarEmoji: "🐼" // custom pickable avatar emoji
};

// GLOBAL: Reduced Motion Detection (B2 - prefers-reduced-motion support)
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// HELPER: Centralized GSAP animation guard — checks gsap availability + reduced-motion preference
function canAnimate() {
  return typeof gsap !== "undefined" && !prefersReducedMotion;
}

// UTILITY: Debounce function (B1 - search input optimization)
function debounce(fn, delay) {
  let timerId = null;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  setupEventListeners();
  renderAllComponents();
  initGSAPPreloader();

  // B5: Restore saved theme preference
  if (appState.theme) {
    document.documentElement.setAttribute("data-theme", appState.theme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) themeBtn.innerText = appState.theme === "dark" ? "🌙" : "☀️";
  }

  // Restore accessibility preferences
  if (appState.pinyinMode) {
    document.documentElement.setAttribute("data-pinyin", appState.pinyinMode);
    var pBtn = document.getElementById("profilePinyinBtn");
    var pLabels = { both: "Hanzi+Pinyin", pinyin: "Pinyin Only", hanzi: "Hanzi Only" };
    if (pBtn) pBtn.textContent = pLabels[appState.pinyinMode] || "Hanzi+Pinyin";
  }
  if (appState.highContrast) {
    document.documentElement.setAttribute("data-high-contrast", "true");
    var cBtn = document.getElementById("profileContrastBtn");
    if (cBtn) cBtn.textContent = "On";
  }
  if (appState.dyslexiaFont) {
    document.documentElement.setAttribute("data-dyslexia", "true");
    var dBtn = document.getElementById("profileDyslexiaBtn");
    if (dBtn) dBtn.textContent = "On";
  }
});

// GSAP PRELOADER & PARALLAX SCROLL SYSTEM
// C1: Unified master timeline — preloader entrance → progress → exit → hero entrance
function initGSAPPreloader() {
  if (typeof gsap === "undefined") {
    const loader = document.getElementById("appPreloader");
    if (loader) loader.style.display = "none";
    return;
  }

  // B4: Register ScrollTrigger plugin if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // B2: Reduced-motion fallback — skip all animations, show everything immediately
  if (prefersReducedMotion) {
    const loader = document.getElementById("appPreloader");
    if (loader) loader.style.display = "none";
    gsap.set(".navbar, .hero-badge-pill, .hero-title, .hero-subtitle, .stat-card-pill, .island-3d-sphere, .floating-badge-1, .floating-badge-2",
      { autoAlpha: 1, y: 0, scale: 1, rotation: 0 });
    setupGSAPParallax();
    return;
  }

  // C1: Single master timeline coordinates all splash → hero animations
  const tl = gsap.timeline({
    onComplete: () => {
      const loader = document.getElementById("appPreloader");
      if (loader) loader.style.display = "none";
      setupGSAPParallax();
      animateDashboardSections();
    }
  });

  // Phase 1: Preloader card entrance (0s – 0.8s)
  tl.from("#loaderMascot", { scale: 0, rotation: -180, duration: 0.8, ease: "back.out(1.7)" })
    .from("#loaderTitle, #loaderSubtitle", { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, 0.2);

  // Phase 2: Progress counter animation (0.4s – 1.8s)
  const progressObj = { value: 0 };
  tl.to(progressObj, {
    value: 100,
    duration: 1.4,
    ease: "power1.inOut",
    onUpdate: () => {
      const val = Math.round(progressObj.value);
      const bar = document.getElementById("loaderBar");
      const counter = document.getElementById("loaderCounter");
      if (bar) bar.style.width = val + "%";
      if (counter) counter.innerText = val + "%";
    }
  }, 0.4);

  // "exit" label at 1.8s (when counter completes)
  tl.addLabel("exit");

  // Phase 3: Preloader exit (1.8s – 2.5s)
  tl.to(".preloader-card", { scale: 0.85, autoAlpha: 0, duration: 0.4, ease: "power2.in" }, "exit")
    .to("#appPreloader", { yPercent: -100, autoAlpha: 0, duration: 0.7, ease: "power3.inOut" }, "exit");

  // Phase 4: Hero entrance — overlaps preloader exit by 0.3s for seamless transition
  tl.from(".navbar", { y: -40, autoAlpha: 0, duration: 0.8, ease: "power2.out" }, "exit-=0.3")
    .from(".hero-badge-pill, .hero-title, .hero-subtitle", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" }, "exit-=0.2")
    .from(".island-3d-sphere", { scale: 0.4, autoAlpha: 0, duration: 1, ease: "elastic.out(1, 0.4)" }, "exit-=0.1")
    .from(".stat-card-pill", { scale: 0.8, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" }, "exit")
    .from(".floating-badge-1, .floating-badge-2", { scale: 0, autoAlpha: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.7)" }, "exit+=0.2");
}

// B4 + C2: INTERNAL-PAGE SCROLL ANIMATIONS (page-jump architecture)
// Window scroll is disabled; each .tab-section scrolls internally.
// We skip window-scroll ScrollTriggers (they'd never fire) and instead
// run a gentle staggered reveal of dashboard sections after preloader.
function setupGSAPParallax() {
  if (!canAnimate()) return;
  // Scroll-based parallax is disabled in page-jump mode because the window
  // does not scroll; individual tab sections scroll internally.
  // Hero sphere and floating badges keep their CSS keyframe float animations.
}

// Animate dashboard sections in after the preloader timeline completes.
// Called from the preloader onComplete callback.
function animateDashboardSections() {
  if (!canAnimate()) return;
  const dash = document.getElementById("tab-dashboard");
  if (!dash) return;
  const sections = dash.querySelectorAll(".page-inner > section");
  if (!sections.length) return;
  gsap.fromTo(sections,
    { autoAlpha: 0, y: 30, scale: 0.96 },
    { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.55, ease: "power2.out", delay: 0.1, overwrite: "auto" }
  );
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem("kidsisland_zh_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        appState = { ...appState, ...parsed };
      }
    }
  } catch (error) {
    console.warn("Could not load saved state", error);
  }

  if (!Number.isInteger(appState.checkinWeek) || appState.checkinWeek < 1) appState.checkinWeek = 1;
  if (!Array.isArray(appState.checkinClaimedDays)) appState.checkinClaimedDays = [];
  if (!Array.isArray(appState.unlockedBadges)) appState.unlockedBadges = [];
  if (!Array.isArray(appState.learnedWordIds)) appState.learnedWordIds = [];

  appState.currentTab = "dashboard";
  checkAndUnlockBadges();
}

function saveState() {
  try {
    localStorage.setItem("kidsisland_zh_state", JSON.stringify(appState));
  } catch (error) {
    console.warn("Could not save state", error);
  }
}

// AUDIO SPEECH SYNTHESIS ENGINE
// A6: Default speech rate for kids — slightly slower than normal for clarity
const DEFAULT_SPEECH_RATE = 0.85;
function speakMandarin(text, event) {
  if (event) event.stopPropagation();
  if (!('speechSynthesis' in window)) {
    alert("Speech Synthesis not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel(); // Stop ongoing audio
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = appState.speechRate || DEFAULT_SPEECH_RATE; // A6: Configurable speed for kids
  utterance.pitch = 1.1; // Friendly warm pitch

  window.speechSynthesis.speak(utterance);
}

function speakNative(text, event) {
  if (event) event.stopPropagation();
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = appState.langBase === "es" ? "es-ES" : "en-US";
  utterance.rate = (appState.speechRate || DEFAULT_SPEECH_RATE) + 0.05; // A6: Slightly faster than Mandarin

  window.speechSynthesis.speak(utterance);
}

// RENDER HELPERS & TONE BADGES
function getToneBadgeHTML(toneNum) {
  const toneMap = {
    1: { label: "1st Tone ˉ", class: "tone-badge-1", desc: "High Flat" },
    2: { label: "2nd Tone ˊ", class: "tone-badge-2", desc: "Rising" },
    3: { label: "3rd Tone ˇ", class: "tone-badge-3", desc: "Dip & Rise" },
    4: { label: "4th Tone ˋ", class: "tone-badge-4", desc: "Falling" },
    0: { label: "Neutral •", class: "tone-badge-0", desc: "Soft" }
  };
  const t = toneMap[toneNum] || toneMap[0];
  return `<span class="tone-badge ${t.class}">${t.label}</span>`;
}

// CARD COMPONENT CREATION
function createCardHTML(wordObj) {
  const isEs = appState.langBase === "es";
  const primaryTrans = isEs ? wordObj.es : wordObj.en;
  const secondaryTrans = isEs ? wordObj.en : wordObj.es;
  const sentenceTrans = isEs ? wordObj.sentenceEs : wordObj.sentenceEn;

  const toneBadges = wordObj.tones.map(t => getToneBadgeHTML(t)).join(" ");

  return `
    <div class="vocab-card" data-vocab-id="${wordObj.id}" onclick="flipCard(this)">
      <div class="card-inner">
        <!-- FRONT SIDE -->
        <div class="card-front">
          <div class="card-top-row">
            <span class="category-tag">${wordObj.category}</span>
            <div style="display:flex; gap:4px; align-items:center;">
              <button class="star-btn ${appState.favorites.includes(wordObj.id) ? 'active' : ''}" data-fav-id="${wordObj.id}" onclick="toggleFavorite(${wordObj.id}, event)" title="Add to Favorites">⭐</button>
              <button class="audio-btn-circular" style="width:38px; height:38px; font-size:16px;" onclick="speakMandarin('${wordObj.hanzi}', event)" title="Listen Mandarin Pronunciation">🔊</button>
            </div>
          </div>

          <div class="card-center-content">
            <div class="card-emoji">${wordObj.emoji}</div>
            <div class="hanzi-text">${wordObj.hanzi}</div>
            <div class="pinyin-text">${wordObj.pinyin}</div>
            <div class="tone-badges-row">${toneBadges}</div>
          </div>

          <div class="card-flip-hint">
            <span>Tap to flip</span> 🔄
          </div>
        </div>

        <!-- BACK SIDE -->
        <div class="card-back">
          <div class="card-top-row">
            <div style="font-size:15px; font-weight:800; color:var(--color-primary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:60%;">${wordObj.emoji} ${wordObj.hanzi}</div>
            <div style="display:flex; gap:6px; flex-shrink:0;">
              <button class="audio-btn-circular" style="width:32px; height:32px; font-size:14px;" onclick="speakMandarin('${wordObj.hanzi}', event)" title="Mandarin">🇨🇳</button>
              <button class="audio-btn-circular" style="width:32px; height:32px; font-size:14px; background:linear-gradient(135deg, #f97316, #eab308);" onclick="speakNative('${primaryTrans}', event)" title="Native Base">🔊</button>
            </div>
          </div>

          <div style="text-align:center; margin:6px 0;">
            <div style="font-size:24px; font-weight:800; color:var(--color-primary); line-height:1.2;">${primaryTrans}</div>
            <div style="font-size:12px; color:var(--text-muted); font-weight:600; margin-top:2px;">Alt: ${secondaryTrans}</div>
          </div>

          <div style="text-align:center;">
            <span class="card-radical-hint">💡 Hint: ${wordObj.radicalHint}</span>
          </div>

          <div style="margin-top:8px; background:var(--color-primary-light); padding:8px 10px; border-radius:10px; font-size:11px; text-align:left; width:100%; box-sizing:border-box; border:1px solid rgba(59,130,246,0.15); max-height:85px; overflow-y:auto;">
            <div style="font-weight:800; color:var(--text-main); line-height:1.3;">${wordObj.sentenceZh}</div>
            <div style="color:var(--color-primary); font-weight:700; font-size:10px;">${wordObj.sentencePinyin}</div>
            <div style="color:var(--text-muted); font-style:italic; font-size:10px; margin-top:2px;">"${sentenceTrans}"</div>
          </div>

          <div style="margin-top:auto; padding-top:6px; border-top:1px dashed rgba(0,0,0,0.06); font-size:11px; font-weight:700; color:var(--text-muted); text-align:center;">
            LEVEL: ${wordObj.level.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  `;
}

function getAuthenticatedUserId() {
  return appState.userAuth && appState.userAuth.id ? appState.userAuth.id : null;
}

async function persistLearningProgress(vocabId) {
  const userId = getAuthenticatedUserId();
  if (!userId || typeof saveLearningProgressDB !== "function") return;
  try {
    await saveLearningProgressDB(userId, vocabId);
  } catch (error) {
    console.warn("Could not sync learning progress", error);
  }
}

async function syncProfileToCloud() {
  const userId = getAuthenticatedUserId();
  if (!userId || typeof saveUserProfileDB !== "function") return;
  try {
    await saveUserProfileDB(userId, appState);
  } catch (error) {
    console.warn("Could not sync profile changes", error);
  }
}

function flipCard(cardElem) {
  const isFlipped = cardElem.classList.toggle("flipped");
  const inner = cardElem.querySelector(".vocab-card-inner") || cardElem.querySelector(".card-inner");

  // A4: Track learned words for progress ring
  const vocabId = parseInt(cardElem.getAttribute("data-vocab-id"));
  if (vocabId && !appState.learnedWordIds.includes(vocabId)) {
    appState.learnedWordIds.push(vocabId);
    persistLearningProgress(vocabId);
  }

  // A3: Track card flips for achievements
  appState.totalCardsFlipped++;
  saveState();
  renderProgressRing();
  checkAndUnlockBadges();

  // GSAP-powered flip — overwrite kills any in-progress tween to prevent "stuck" state
  if (canAnimate() && inner) {
    // Disable CSS fallback transition so GSAP has exclusive control (avoids double-animation)
    inner.style.transition = "none";
    gsap.to(inner, {
      rotationY: isFlipped ? 180 : 0,
      duration: 0.45,
      ease: "back.out(1.2)",
      overwrite: true,
      transformOrigin: "50% 50%"
    });
  }
}

// A1: Toggle favorite star
function toggleFavorite(vocabId, event) {
  if (event) event.stopPropagation();
  const idx = appState.favorites.indexOf(vocabId);
  const isAdding = idx === -1;

  if (isAdding) {
    appState.favorites.push(vocabId);
  } else {
    appState.favorites.splice(idx, 1);
  }
  saveState();

  // Update star button DOM without full re-render
  const starBtn = document.querySelector(`[data-fav-id="${vocabId}"]`);
  if (starBtn) {
    starBtn.classList.toggle("active", isAdding);
    // GSAP pop animation
    if (canAnimate()) {
      gsap.fromTo(starBtn,
        { scale: 0.5, rotation: -30 },
        { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(2)", overwrite: "auto" }
      );
    }
  }

  // If in favorites filter view and removing, re-render to remove the card
  if (!isAdding && appState.activeLevel === "favorites") {
    renderVocabGrid();
  }
}

// A4: Render progress ring (placeholder - SVG added by A4 HTML changes)
function renderProgressRing() {
  const ringFill = document.querySelector(".progress-ring-fill");
  const ringText = document.querySelector(".progress-ring-text");
  if (!ringFill || !ringText) return;

  const total = CHINESE_VOCABULARY.length;
  const learned = appState.learnedWordIds.length;
  const pct = Math.round((learned / total) * 100);
  const circumference = 2 * Math.PI * 24; // r=24
  const offset = circumference - (pct / 100) * circumference;

  if (canAnimate()) {
    gsap.to(ringFill, { strokeDashoffset: offset, duration: 0.6, ease: "power2.out" });
    // Animate number counter
    const obj = { val: parseInt(ringText.innerText) || 0 };
    gsap.to(obj, {
      val: pct, duration: 0.6, ease: "power2.out",
      onUpdate: () => { ringText.innerText = Math.round(obj.val) + "%"; }
    });
  } else {
    ringFill.style.strokeDashoffset = offset;
    ringText.innerText = pct + "%";
  }
}

// A6: Cycle speech speed (4 levels)
function cycleSpeechSpeed() {
  const speeds = [0.5, 0.75, 0.85, 1.0];
  const currentIdx = speeds.indexOf(appState.speechRate);
  const nextIdx = (currentIdx + 1) % speeds.length;
  appState.speechRate = speeds[nextIdx];
  saveState();

  const label = document.getElementById("speedLabel");
  if (label) label.innerText = appState.speechRate + "x";

  const btn = document.getElementById("speedPillBtn");
  if (btn && canAnimate()) {
    gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
  }

  showToast("🔊 Speech Speed: " + appState.speechRate + "x");

  // Update profile page button if visible
  const profileSpeedBtn = document.getElementById("profileSpeedBtn");
  if (profileSpeedBtn) profileSpeedBtn.textContent = appState.speechRate + "x";
}

// B5: Toggle dark/light theme (used by profile page and any button calling toggleDarkMode)
function toggleDarkMode() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);

  // Update navbar theme toggle icon
  const navThemeBtn = document.getElementById("themeToggleBtn");
  if (navThemeBtn) navThemeBtn.innerText = next === "dark" ? "🌙" : "☀️";

  // Update profile page theme button
  const profileThemeBtn = document.getElementById("profileThemeBtn");
  if (profileThemeBtn) profileThemeBtn.textContent = next === "dark" ? "🌙 Dark" : "☀️ Light";

  // Persist and animate
  appState.theme = next;
  saveState();

  if (canAnimate() && profileThemeBtn) {
    gsap.fromTo(profileThemeBtn,
      { scale: 0.9 },
      { scale: 1, duration: 0.35, ease: "back.out(2)" }
    );
  }

  showToast(next === "dark" ? "🌙 Dark mode enabled" : "☀️ Light mode enabled");
}

// ── Pinyin Display Mode: "both" (汉字+拼音), "pinyin" (拼音 only), "hanzi" (汉字 only)
function cyclePinyinMode() {
  var modes = ["both", "pinyin", "hanzi"];
  var labels = ["Hanzi+Pinyin", "Pinyin Only", "Hanzi Only"];
  var current = appState.pinyinMode || "both";
  var idx = modes.indexOf(current);
  var next = modes[(idx + 1) % modes.length];
  appState.pinyinMode = next;
  saveState();
  document.documentElement.setAttribute("data-pinyin", next);
  var btn = document.getElementById("profilePinyinBtn");
  if (btn) btn.textContent = labels[(idx + 1) % labels.length];
  showToast("Pinyin: " + labels[(idx + 1) % labels.length]);
}

// ── High Contrast Mode
function toggleHighContrast() {
  var active = document.documentElement.hasAttribute("data-high-contrast");
  if (active) {
    document.documentElement.removeAttribute("data-high-contrast");
  } else {
    document.documentElement.setAttribute("data-high-contrast", "true");
  }
  appState.highContrast = !active;
  saveState();
  var btn = document.getElementById("profileContrastBtn");
  if (btn) btn.textContent = !active ? "On" : "Off";
  showToast(!active ? "High contrast enabled" : "High contrast disabled");
}

// ── Dyslexia-Friendly Font
function toggleDyslexiaFont() {
  var active = document.documentElement.hasAttribute("data-dyslexia");
  if (active) {
    document.documentElement.removeAttribute("data-dyslexia");
  } else {
    document.documentElement.setAttribute("data-dyslexia", "true");
  }
  appState.dyslexiaFont = !active;
  saveState();
  var btn = document.getElementById("profileDyslexiaBtn");
  if (btn) btn.textContent = !active ? "On" : "Off";
  showToast(!active ? "Dyslexia font enabled" : "Dyslexia font disabled");
}

// A8: Render skeleton loading cards
function renderSkeletonCards(container, count) {
  if (!container) return;
  container.innerHTML = Array(count).fill(0).map(() => `
    <div class="skeleton-card">
      <div style="padding:20px;">
        <div style="display:flex; gap:12px; align-items:center;">
          <div class="skeleton-circle" style="width:50px; height:50px; border-radius:50%; background:rgba(0,0,0,0.06);"></div>
          <div style="flex:1;">
            <div class="skeleton-line long"></div>
            <div class="skeleton-line short"></div>
          </div>
        </div>
        <div class="skeleton-line long" style="margin-top:20px;"></div>
        <div class="skeleton-line short" style="margin-top:4px;"></div>
      </div>
    </div>
  `).join("");
}

// RENDER ALL COMPONENTS
function renderAllComponents() {
  updateHeaderUI();
  renderPhrasesGrid();
  renderVocabGrid();
  renderCategoryPills();
  renderQuiz();
  renderDailyWord();
  renderBadgesPanel();
}

// A2: DAILY WORD - deterministic rotation based on day of year
function getDailyWord() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return CHINESE_VOCABULARY[dayOfYear % CHINESE_VOCABULARY.length];
}

function renderDailyWord() {
  const section = document.getElementById("dailyWordSection");
  if (!section) return;

  const word = getDailyWord();
  const isEs = appState.langBase === "es";
  const isFav = appState.favorites.includes(word.id);

  section.innerHTML = `
    <div class="daily-word-card" id="dailyWordCard">
      <div class="daily-word-emoji">${word.emoji}</div>
      <div class="daily-word-center">
        <div style="font-size:11px; font-weight:800; color:var(--color-tertiary); text-transform:uppercase; letter-spacing:0.05em;">${isEs ? "Palabra del Día" : "Word of the Day"}</div>
        <div style="font-size:28px; font-weight:900; color:var(--text-main); line-height:1.2;">${word.hanzi}</div>
        <div style="font-size:14px; color:var(--color-primary); font-weight:700;">${word.pinyin}</div>
        <div style="font-size:13px; color:var(--text-muted);">${isEs ? word.es : word.en}</div>
      </div>
      <div class="daily-word-right">
        <button class="audio-btn-circular" style="width:44px; height:44px; font-size:20px;" onclick="speakMandarin('${word.hanzi}', event)" title="Listen">🔊</button>
        <button class="star-btn ${isFav ? 'active' : ''}" data-fav-id="${word.id}" onclick="toggleFavorite(${word.id}, event)" title="Favorite">⭐</button>
      </div>
    </div>
  `;

  // A2: GSAP elastic entrance + glow pulse
  if (canAnimate()) {
    gsap.fromTo("#dailyWordCard",
      { autoAlpha: 0, scale: 0.8 },
      { autoAlpha: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)", overwrite: "auto" }
    );
    gsap.to("#dailyWordCard",
      { boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)", duration: 1.5, yoyo: true, repeat: -1, ease: "sine.inOut" }
    );
  }
}

// A5: CONFETTI PARTICLE ANIMATION
function triggerConfetti(x, y) {
  if (!canAnimate()) return;

  const container = document.getElementById("confettiContainer");
  if (!container) return;

  const colors = ["#f97316", "#3b82f6", "#eab308", "#22c55e", "#ef4444", "#a855f7"];
  const emojis = ["🎉", "⭐", "🌟", "✨", "🎊", "💫"];
  const particleCount = 24;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    const isEmoji = i % 2 === 0;

    if (isEmoji) {
      particle.textContent = emojis[i % emojis.length];
      particle.style.fontSize = (16 + Math.random() * 12) + "px";
    } else {
      particle.style.width = (8 + Math.random() * 8) + "px";
      particle.style.height = (8 + Math.random() * 8) + "px";
      particle.style.background = colors[i % colors.length];
      particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    }

    particle.style.position = "absolute";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.pointerEvents = "none";
    container.appendChild(particle);

    const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.3;
    const distance = 80 + Math.random() * 120;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 50; // Bias upward

    gsap.to(particle, {
      x: dx, y: dy,
      rotation: Math.random() * 360 - 180,
      autoAlpha: 0,
      scale: 0.3,
      duration: 1.2 + Math.random() * 0.4,
      ease: "power1.out",
      onComplete: () => particle.remove()
    });
  }
}

// A3: ACHIEVEMENT BADGES SYSTEM (Synced across Check-ins, Cards, Quizzes & Profile)
const ACHIEVEMENT_BADGES = [
  { id: "first_flip", icon: "🎴", name: "First Card", desc: "View your 1st Hanzi card", condition: (s) => (s.totalCardsFlipped || 0) >= 1 || (s.learnedWordIds && s.learnedWordIds.length >= 1) },
  { id: "card_master_50", icon: "📚", name: "50 Cards", desc: "Learn 50 Hanzi cards", condition: (s) => (s.totalCardsFlipped || 0) >= 50 || (s.learnedWordIds && s.learnedWordIds.length >= 50) },
  { id: "checkin_3", icon: "🔥", name: "3-Day Streak", desc: "Check in 3 days", condition: (s) => (s.userStreakDays || 0) >= 3 || (s.checkinClaimedDays && s.checkinClaimedDays.length >= 3) || (s.checkinWeek && s.checkinWeek > 1) },
  { id: "streak_7", icon: "🏆", name: "Week 1 Master", desc: "Complete 7 days check-in", condition: (s) => (s.userStreakDays || 0) >= 7 || (s.checkinClaimedDays && s.checkinClaimedDays.length >= 7) || (s.checkinWeek && s.checkinWeek > 1) },
  { id: "week_2", icon: "🚀", name: "Week 2 Explorer", desc: "Advance to Week 2 check-ins", condition: (s) => (s.checkinWeek || 1) >= 2 },
  { id: "stars_100", icon: "⭐", name: "100 Stars", desc: "Earn 100 Gold Stars", condition: (s) => (s.userStars || 0) >= 100 },
  { id: "stars_500", icon: "🌟", name: "500 Stars", desc: "Earn 500 Gold Stars", condition: (s) => (s.userStars || 0) >= 500 },
  { id: "quiz_master_10", icon: "🎯", name: "Quiz Hero", desc: "Answer 10 quizzes correctly", condition: (s) => (s.totalQuizCorrect || 0) >= 10 || (s.quizStreak || 0) >= 10 }
];

function checkAndUnlockBadges() {
  if (!Array.isArray(appState.unlockedBadges)) appState.unlockedBadges = [];

  const newBadges = ACHIEVEMENT_BADGES.filter(badge =>
    !appState.unlockedBadges.includes(badge.id) && badge.condition(appState)
  );

  if (newBadges.length > 0) {
    newBadges.forEach(badge => {
      if (!appState.unlockedBadges.includes(badge.id)) {
        appState.unlockedBadges.push(badge.id);
      }
    });
    saveState();

    newBadges.forEach((badge, i) => {
      setTimeout(() => {
        showToast(`🏆 Badge Unlocked: ${badge.name}! ${badge.icon}`);
        triggerConfetti(window.innerWidth / 2, window.innerHeight / 2);
      }, i * 600);
    });
  }

  renderBadgesPanel();
  renderProfileBadges();
}

// ============ PROFILE PAGE RENDER ============
function renderProfilePage() {
  // Update profile hero
  const profileName = document.getElementById("profileName");
  const profileSubtitle = document.getElementById("profileSubtitle");
  const profileAvatar = document.getElementById("profileAvatar");
  const profileStars = document.getElementById("profileStars");
  const profileStreak = document.getElementById("profileStreak");
  const profileCards = document.getElementById("profileCards");
  const profileNameInput = document.getElementById("profileNameInput");
  const profileSpeedBtn = document.getElementById("profileSpeedBtn");
  const profileThemeBtn = document.getElementById("profileThemeBtn");
  const profileLangEn = document.getElementById("profileLangEn");
  const profileLangEs = document.getElementById("profileLangEs");

  if (profileName) profileName.textContent = appState.userName || "Explorer";
  if (profileSubtitle) {
    const level = appState.userStars > 500 ? "Mandarin Master" : appState.userStars > 200 ? "Star Collector" : "Mandarin Adventurer";
    profileSubtitle.textContent = level;
  }
  if (profileAvatar) {
    // Use custom avatar emoji (falls back to 🐼); Google avatar overrides if logged in
    const googleAvatar = appState.userAuth && appState.userAuth.user_metadata?.avatar_url;
    if (googleAvatar) {
      profileAvatar.textContent = "";
      profileAvatar.style.backgroundImage = `url(${googleAvatar})`;
      profileAvatar.style.backgroundSize = "cover";
      profileAvatar.style.backgroundPosition = "center";
      profileAvatar.style.fontSize = "0";
    } else {
      profileAvatar.textContent = appState.userAvatarEmoji || "🐼";
      profileAvatar.style.backgroundImage = "";
      profileAvatar.style.backgroundSize = "";
      profileAvatar.style.backgroundPosition = "";
      profileAvatar.style.fontSize = "";
    }
  }
  if (profileStars) profileStars.textContent = appState.userStars || 0;
  if (profileStreak) profileStreak.textContent = appState.userStreakDays || 0;
  if (profileCards) profileCards.textContent = appState.learnedWordIds ? appState.learnedWordIds.length : 0;
  if (profileNameInput) profileNameInput.value = appState.userName || "";
  if (profileSpeedBtn) profileSpeedBtn.textContent = (appState.speechRate || 0.85) + "x";
  if (profileThemeBtn) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    profileThemeBtn.textContent = isDark ? "🌙 Dark" : "☀️ Light";
  }

  // Lang base active state
  if (profileLangEn) profileLangEn.classList.toggle("active", appState.langBase === "en");
  if (profileLangEs) profileLangEs.classList.toggle("active", appState.langBase === "es");

  // Auth status
  renderProfileAuthStatus();
  renderProfileBadges();
}

function renderProfileAuthStatus() {
  const guestSection = document.querySelector(".profile-auth-guest");
  const loggedInSection = document.querySelector(".profile-auth-loggedin");
  if (!guestSection || !loggedInSection) return;

  if (appState.userAuth) {
    guestSection.style.display = "none";
    loggedInSection.style.display = "flex";
    const nameEl = document.getElementById("profileGoogleName");
    const emailEl = document.getElementById("profileGoogleEmail");
    const avatarEl = document.getElementById("profileGoogleAvatar");
    if (nameEl) nameEl.textContent = appState.userAuth.user_metadata?.full_name || appState.userName;
    if (emailEl) emailEl.textContent = appState.userAuth.email || "";
    if (avatarEl) {
      if (appState.userAuth.user_metadata?.avatar_url) {
        avatarEl.textContent = "";
        avatarEl.style.backgroundImage = `url(${appState.userAuth.user_metadata.avatar_url})`;
        avatarEl.style.backgroundSize = "cover";
      } else {
        avatarEl.textContent = "🐼";
      }
    }
  } else {
    guestSection.style.display = "block";
    loggedInSection.style.display = "none";
  }
}

function renderProfileBadges() {
  const grid = document.getElementById("profileBadgesGrid");
  if (!grid) return;
  if (!Array.isArray(appState.unlockedBadges)) appState.unlockedBadges = [];

  grid.innerHTML = ACHIEVEMENT_BADGES.map(badge => {
    const unlocked = appState.unlockedBadges.includes(badge.id) || badge.condition(appState);
    return `
      <div class="profile-badge-item ${unlocked ? 'unlocked' : 'locked'}" title="${badge.desc}">
        <div class="profile-badge-emoji">${unlocked ? badge.icon : '🔒'}</div>
        <div class="profile-badge-name">${badge.name}</div>
      </div>
    `;
  }).join("");
}

function saveProfileName() {
  const input = document.getElementById("profileNameInput");
  const saveBtn = document.getElementById("profileSaveNameBtn");
  if (input && input.value.trim()) {
    appState.userName = input.value.trim();
    saveState();
    syncProfileToCloud();
    updateHeaderUI();
    renderProfilePage();

    // Shimmer sweep on name
    const nameEl = document.getElementById("profileName");
    if (nameEl) {
      nameEl.classList.remove("name-shimmer");
      void nameEl.offsetWidth; // force reflow to restart animation
      nameEl.classList.add("name-shimmer");
    }

    // Save button pulse
    if (saveBtn) {
      saveBtn.classList.remove("saved-pulse");
      void saveBtn.offsetWidth;
      saveBtn.classList.add("saved-pulse");
    }

    // GSAP confetti burst around the avatar
    if (canAnimate()) {
      const avatar = document.getElementById("profileAvatar");
      if (avatar) {
        const rect = avatar.getBoundingClientRect();
        triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
        gsap.fromTo(avatar,
          { scale: 0.7, rotation: -15 },
          { scale: 1, rotation: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" }
        );
      }
    }

    showToast(`✨ Name updated to ${appState.userName}!`);
  }
}

// ============ AVATAR PICKER ============
const AVATAR_EMOJIS = [
  "🐼", "🦊", "🐶", "🐱", "🦁", "🐯", "🐰", "🐻", "🐨", "🐸",
  "🐵", "🦉", "🐧", "🦄", "🐲", "🦕", "🐙", "🦋", "🐝", "🌸"
];

function openAvatarPicker() {
  const overlay = document.getElementById("avatarPickerOverlay");
  const grid = document.getElementById("avatarPickerGrid");
  if (!overlay || !grid) return;

  const currentEmoji = appState.userAvatarEmoji || "🐼";
  grid.innerHTML = AVATAR_EMOJIS.map(emoji =>
    `<div class="avatar-picker-item ${emoji === currentEmoji ? 'selected' : ''}" onclick="selectAvatar('${emoji}')" role="button" tabindex="0">${emoji}</div>`
  ).join("");

  overlay.classList.add("active");

  // GSAP stagger entrance for grid items
  if (canAnimate()) {
    const items = grid.querySelectorAll(".avatar-picker-item");
    gsap.fromTo(items,
      { scale: 0, autoAlpha: 0, rotation: -30 },
      { scale: 1, autoAlpha: 1, rotation: 0, stagger: 0.03, duration: 0.4, ease: "back.out(1.7)", delay: 0.15 }
    );
  }
}

function closeAvatarPicker(event) {
  // If called from overlay onclick, only close if clicking the overlay itself (not card)
  if (event && event.target && event.target.id !== "avatarPickerOverlay") return;
  const overlay = document.getElementById("avatarPickerOverlay");
  if (!overlay) return;

  // GSAP exit
  if (canAnimate()) {
    const card = overlay.querySelector(".avatar-picker-card");
    if (card) {
      gsap.to(card, {
        scale: 0.8, autoAlpha: 0, duration: 0.25, ease: "power2.in",
        onComplete: () => { overlay.classList.remove("active"); gsap.set(card, { clearProps: "all" }); }
      });
      return;
    }
  }
  overlay.classList.remove("active");
}

function selectAvatar(emoji) {
  appState.userAvatarEmoji = emoji;
  saveState();
  syncProfileToCloud();

  const avatarEl = document.getElementById("profileAvatar");
  const overlay = document.getElementById("avatarPickerOverlay");

  // Animate avatar swap
  if (canAnimate() && avatarEl) {
    const tl = gsap.timeline({
      onComplete: () => {
        if (overlay) {
          overlay.classList.remove("active");
          gsap.set(avatarEl, { clearProps: "scale,rotation,filter" });
        }
      }
    });
    // Shrink + blur out
    tl.to(avatarEl, { scale: 0.4, rotation: 180, filter: "blur(8px)", duration: 0.3, ease: "power2.in" })
      // Swap emoji at midpoint
      .call(() => { avatarEl.textContent = emoji; }, null, 0.3)
      // Pop back with elastic
      .to(avatarEl, { scale: 1, rotation: 360, filter: "blur(0px)", duration: 0.6, ease: "elastic.out(1, 0.5)" }, 0.3)
      // Sparkle burst
      .call(() => {
        const rect = avatarEl.getBoundingClientRect();
        triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }, null, 0.5);
  } else {
    // No animation fallback
    if (avatarEl) avatarEl.textContent = emoji;
    if (overlay) overlay.classList.remove("active");
  }

  // Update selected state in grid
  document.querySelectorAll(".avatar-picker-item").forEach(item => {
    item.classList.toggle("selected", item.textContent.trim() === emoji);
  });

  showToast(`✨ Avatar changed to ${emoji}!`);
}

// Enter key support for name input
function setupProfileNameEnterKey() {
  const input = document.getElementById("profileNameInput");
  if (input) {
    input.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        saveProfileName();
        input.blur();
      }
    });
  }
}

async function handleProfileLogout() {
  try {
    if (typeof signOutUser === "function") await signOutUser();
    appState.userAuth = null;
    saveState();
    renderProfilePage();
    updateHeaderUI();
    showToast("Signed out successfully.");
  } catch (error) {
    console.warn("Sign-out failed", error);
    showToast("Could not sign out. Please try again.");
  }
}

function renderBadgesPanel() {
  const panel = document.getElementById("badgesPanel");
  if (!panel) return;
  if (!Array.isArray(appState.unlockedBadges)) appState.unlockedBadges = [];

  panel.innerHTML = ACHIEVEMENT_BADGES.map(badge => {
    const unlocked = appState.unlockedBadges.includes(badge.id) || badge.condition(appState);
    return `
      <div class="badge-item ${unlocked ? 'unlocked' : 'locked'}" title="${badge.desc}">
        <div class="badge-icon">${unlocked ? badge.icon : '🔒'}</div>
        <div class="badge-name">${badge.name}</div>
      </div>
    `;
  }).join("");
}

function updateHeaderUI() {
  const isEs = appState.langBase === "es";
  const flag = document.getElementById("currentLangFlag");
  const text = document.getElementById("currentLangText");
  const user = document.getElementById("userNameDisplay");
  const streak = document.getElementById("statStreakVal");
  const stars = document.getElementById("statStarsVal");
  const title = document.getElementById("heroTitle");
  const subTitle = document.getElementById("heroSubtitle");
  const vocabSub = document.getElementById("vocabSubtitle");

  if (flag) flag.innerText = isEs ? "🇪🇸" : "🇺🇸";
  if (text) text.innerText = isEs ? "ES ➔ 🇨🇳 Chino" : "EN ➔ 🇨🇳 Chinese";
  if (user) user.innerText = appState.userName;
  if (streak) streak.innerText = appState.userStreakDays + " Days";
  if (stars) stars.innerText = appState.userStars;

  if (title) title.innerText = isEs 
    ? "¡Aprende Chino Mandarín Explorando la Isla Mágica!"
    : "Learn Mandarin Chinese Through Fun Island Exploration!";

  if (subTitle) subTitle.innerText = isEs
    ? "Tarjetas interactivas de Hanzi con Pinyin y tonos, pronunciación de audio y soporte en Español e Inglés."
    : "Interactive Hanzi cards with Pinyin & Tone guides, native audio pronunciation, and dual English & Spanish support.";

  if (vocabSub) vocabSub.innerText = isEs
    ? "¡Toca las tarjetas para ver la traducción y presiona el altavoz para escuchar en mandarín!"
    : "Tap cards to flip for English/Spanish translation and tap speaker for Mandarin audio!";

  // Talk page hold-to-talk coach hint (EN/ES)
  const holdHintTitle = document.getElementById("holdHintTitle");
  const holdHintSub = document.getElementById("holdHintSub");
  const holdHintBox = document.getElementById("holdHint");
  if (holdHintTitle) holdHintTitle.innerText = isEs ? "Mantén pulsado" : "Press & hold";
  if (holdHintSub) holdHintSub.innerText = isEs ? "Suelta para enviar" : "Release to send";
  if (holdHintBox) holdHintBox.setAttribute("aria-label", isEs
    ? "Mantén pulsado el micrófono para hablar, suelta para enviar"
    : "Press and hold the microphone to talk, release to send");

  // Navbar & brand i18n (EN/ES)
  const brandSubtitle = document.getElementById("brandSubtitle");
  if (brandSubtitle) brandSubtitle.innerText = isEs
    ? "熊猫学堂 · Aprende Chino"
    : "熊猫学堂 · Learn Chinese";

  const checkinBtnNavText = document.getElementById("checkinBtnNavText");
  if (checkinBtnNavText) checkinBtnNavText.innerText = isEs ? "Recompensas" : "Daily Rewards";

  // Top nav tab labels (keep emoji prefix, swap the text after it)
  const navLabels = isEs
    ? { dashboard: "Inicio", vocab: "Tarjetas", quiz: "Examen", profile: "Perfil", voice: "Hablar" }
    : { dashboard: "Home", vocab: "Cards", quiz: "Quiz", profile: "Me", voice: "Talk" };
  const navIcons = { dashboard: "🏝️", vocab: "🎴", quiz: "⚡️", profile: "👤", voice: "🎤" };
  ["dashboard", "vocab", "quiz", "profile", "voice"].forEach(tab => {
    const btn = document.getElementById("tabBtn" + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (btn) btn.innerText = navIcons[tab] + " " + navLabels[tab];
    // Mobile bottom-nav label located via data attribute (no HTML id needed)
    const mobileBtn = document.querySelector('.mobile-nav-item[data-mobile-tab="' + tab + '"] .mobile-nav-label');
    if (mobileBtn) mobileBtn.innerText = navLabels[tab];
  });

  // A4: Update progress ring and text
  const progressVal = document.getElementById("statProgressVal");
  if (progressVal) {
    progressVal.innerText = `${appState.learnedWordIds.length}/${CHINESE_VOCABULARY.length}`;
  }

  // Card-count stat always mirrors the real vocabulary size
  const cardsVal = document.getElementById("statCardsVal");
  if (cardsVal) cardsVal.innerText = CHINESE_VOCABULARY.length;
  renderProgressRing();

  // A6: Initialize speech speed label
  const speedLabel = document.getElementById("speedLabel");
  if (speedLabel) speedLabel.innerText = (appState.speechRate || DEFAULT_SPEECH_RATE) + "x";
}

function renderVocabGrid() {
  const grid = document.getElementById("vocabCardsGrid");
  const countText = document.getElementById("vocabCountText");

  if (!grid) return;

  let filtered = CHINESE_VOCABULARY.filter(item => {
    // A1: Favorites filter
    if (appState.activeLevel === "favorites") {
      if (!appState.favorites.includes(item.id)) return false;
    } else {
      // Level Filter
      if (appState.activeLevel !== "all" && item.level !== appState.activeLevel) return false;
    }
    // Category Filter
    if (appState.activeCategory !== "all" && item.category !== appState.activeCategory) return false;
    // Search Query
    if (appState.searchQuery) {
      const q = appState.searchQuery.toLowerCase();
      return (
        item.hanzi.includes(q) ||
        item.pinyin.toLowerCase().includes(q) ||
        item.en.toLowerCase().includes(q) ||
        item.es.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // A8: Render actual content (with skeleton transition for filter changes)
  const renderContent = () => {
    if (filtered.length === 0) {
      const isEs = appState.langBase === "es";
      grid.innerHTML = `
        <div class="empty-state-container">
          <div class="empty-state-icon">🔍 🐼</div>
          <h3 class="empty-state-title">${isEs ? "No se encontraron palabras" : "No Chinese Words Found"}</h3>
          <p class="empty-state-desc">${isEs ? "Intenta buscar otra palabra o limpia el filtro" : "Try one of these popular words, or clear your search!"}</p>
          <div class="empty-state-suggestions">
            <button class="suggestion-chip" onclick="quickSearch('苹果')">🍎 苹果</button>
            <button class="suggestion-chip" onclick="quickSearch('大熊猫')">🐼 大熊猫</button>
            <button class="suggestion-chip" onclick="quickSearch('你好')">👋 你好</button>
            <button class="suggestion-chip" onclick="quickSearch('妈妈')">👩 妈妈</button>
            <button class="suggestion-chip" onclick="quickSearch('红色')">🔴 红色</button>
          </div>
          <button class="btn-primary-3d empty-state-clear-btn" onclick="clearSearchInput()">${isEs ? "Limpiar" : "Clear Search"} 🔄</button>
        </div>
      `;
      if (countText) countText.innerText = "0 words found";
      return;
    }

    const sliced = filtered.slice(0, appState.cardsDisplayedCount);
    grid.innerHTML = sliced.map(createCardHTML).join("");

    // B6: Stagger entrance animation for vocab cards
    if (canAnimate() && !appState._skipCardAnimation) {
      gsap.fromTo("#vocabCardsGrid .vocab-card",
        { autoAlpha: 0, y: 40, scale: 0.85 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.4, ease: "back.out(1.2)", overwrite: "auto" }
      );
    }

    if (countText) {
      countText.innerText = `Showing ${sliced.length} of ${filtered.length} words`;
    }

    // B4: Refresh ScrollTrigger after dynamic content changes
    if (typeof ScrollTrigger !== "undefined") {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  };

  // A8: Show skeleton during filter/level changes (skip during search)
  if (!appState._skipCardAnimation) {
    renderSkeletonCards(grid, 6);
    requestAnimationFrame(() => {
      setTimeout(renderContent, 200);
    });
  } else {
    renderContent();
  }
}

function clearSearchInput() {
  const input = document.getElementById("wordSearchInput");
  if (input) input.value = "";
  appState.searchQuery = "";
  renderVocabGrid();
}

// A7: Quick search from suggestion chips
function quickSearch(term) {
  const input = document.getElementById("wordSearchInput");
  if (input) input.value = term;
  appState.searchQuery = term;
  renderVocabGrid();
  renderPhrasesGrid();
}

function renderCategoryPills() {
  const container = document.getElementById("categoryPillsBar");
  if (!container) return;

  const categories = ["all", "Animals", "Food", "Nature", "Transport", "Family", "School", "Colors", "Numbers", "Verbs", "Body", "Clothes", "Home", "Sports", "Places", "Adjectives"];
  
  container.innerHTML = categories.map(cat => `
    <button class="level-filter-btn ${appState.activeCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">
      ${cat === 'all' ? 'All Categories (全部)' : cat}
    </button>
  `).join("");
}

function selectCategory(cat) {
  appState.activeCategory = cat;
  renderVocabGrid();
  renderCategoryPills();
}

// QUIZ ENGINE FOR CHINESE LEARNING
function switchQuizMode(mode) {
  appState.quizMode = mode;
  appState.quizCurrentIndex = 0;
  appState.quizScore = 0;

  document.querySelectorAll(".btn-quiz-mode").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`quizModeBtn${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
  if (activeBtn) activeBtn.classList.add("active");

  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById("quizContainer");
  if (!container) return;

  const currentItem = CHINESE_VOCABULARY[appState.quizCurrentIndex % CHINESE_VOCABULARY.length];
  const isEs = appState.langBase === "es";

  // Generate 4 options
  let wrongOptions = CHINESE_VOCABULARY.filter(v => v.id !== currentItem.id);
  wrongOptions.sort(() => Math.random() - 0.5);
  const selectedWrongs = wrongOptions.slice(0, 3);
  
  let options = [currentItem, ...selectedWrongs];
  options.sort(() => Math.random() - 0.5);

  let questionPrompt = "";
  let questionHeader = "";

  if (appState.quizMode === "meaning") {
    questionHeader = currentItem.hanzi;
    questionPrompt = isEs ? `¿Qué significa "${currentItem.hanzi}" (${currentItem.pinyin})?` : `What is the meaning of "${currentItem.hanzi}" (${currentItem.pinyin})?`;
  } else if (appState.quizMode === "audio") {
    questionHeader = `<button class="audio-btn-circular" style="width:72px; height:72px; font-size:36px;" onclick="speakMandarin('${currentItem.hanzi}')">🔊</button>`;
    questionPrompt = isEs ? "Escucha el audio mandarín y elige la tarjeta correcta:" : "Listen to the Mandarin audio and choose the correct card:";
  } else if (appState.quizMode === "pinyin") {
    questionHeader = currentItem.emoji + " " + currentItem.hanzi;
    questionPrompt = isEs ? `Elige la pronunciación correcta en Pinyin para "${currentItem.hanzi}":` : `Choose the correct Pinyin pronunciation for "${currentItem.hanzi}":`;
  }

  container.innerHTML = `
    <div style="background:var(--bg-glass-strong); border-radius:var(--radius-lg); border:2px solid var(--border-glass); padding:28px; box-shadow:var(--shadow-md);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <div style="font-weight:800; color:var(--text-muted);">Question ${appState.quizCurrentIndex + 1}</div>
        <div class="quiz-score-badge">⭐ Score: ${appState.quizScore} Stars</div>
        ${appState.quizNoTimeLimit ? '<span style="color:var(--success); font-size:13px;">FREE PRACTICE</span>' : ''}
      </div>

      <div class="quiz-question-card">
        <div style="font-size:48px; font-weight:900;" id="quizQuestionDisplay">${questionHeader}</div>
        <div class="quiz-prompt">${questionPrompt}</div>
      </div>

      <div class="quiz-options-grid" style="margin-top:24px;">
        ${options.map(opt => {
          let label = "";
          if (appState.quizMode === "meaning") {
            label = opt.emoji + " " + (isEs ? opt.es : opt.en);
          } else if (appState.quizMode === "audio") {
            label = opt.emoji + " " + opt.hanzi + " (" + opt.pinyin + ")";
          } else if (appState.quizMode === "pinyin") {
            label = "🎵 " + opt.pinyin;
          }
          return `<button class="quiz-option-btn" onclick="checkQuizAnswer(${opt.id === currentItem.id}, this)">${label}</button>`;
        }).join("")}
      </div>
    </div>
  `;

  // B6: Stagger entrance animation for quiz options
  if (canAnimate()) {
    gsap.fromTo("#quizContainer .quiz-option-btn",
      { autoAlpha: 0, y: 20, scale: 0.9 },
      { autoAlpha: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.3, ease: "back.out(1.4)", overwrite: "auto", delay: 0.05 }
    );
  }

  // Accessibility: larger touch targets + keyboard navigation
  document.querySelectorAll(".quiz-option-btn").forEach(function(b) {
    b.style.minHeight = "56px";
    b.style.padding = "14px 18px";
    b.setAttribute("tabindex", "0");
    b.setAttribute("role", "button");
  });
}

function checkQuizAnswer(isCorrect, btnElem) {
  var allBtns = document.querySelectorAll(".quiz-option-btn");
  allBtns.forEach(function(b) { b.disabled = true; });

  if (isCorrect) {
    btnElem.classList.add("correct");
    appState.quizScore += 10;
    appState.userStars += 10;
    // A3: Track quiz stats
    appState.totalQuizCorrect++;
    appState.totalQuizAnswered++;
    appState.quizStreak++;
    saveState();

    // A5: Trigger confetti from button position
    const rect = btnElem.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    // A3: Check for badge unlocks
    checkAndUnlockBadges();
  } else {
    btnElem.classList.add("wrong");
    // Show correct answer with explanation immediately (not after delay)
    var currentItem = CHINESE_VOCABULARY[appState.quizCurrentIndex % CHINESE_VOCABULARY.length];
    var isEs = appState.langBase === "es";
    var correctMeaning = isEs ? currentItem.es : currentItem.en;
    var correctPinyin = currentItem.pinyin;
    var hintText = "✅ 正确答案: " + correctMeaning + " (拼音: " + correctPinyin + ")";

    // Display hint below question
    var promptEl = document.querySelector(".quiz-prompt");
    if (promptEl) {
      var hintDiv = document.createElement("div");
      hintDiv.style.cssText = "color:var(--success); font-weight:700; margin-top:12px; font-size:15px;";
      hintDiv.textContent = hintText;
      promptEl.parentNode.insertBefore(hintDiv, promptEl.nextSibling);
    }

    // A3: Track quiz stats
    appState.totalQuizAnswered++;
    appState.quizStreak = 0;
    saveState();
  }

  setTimeout(function() {
    appState.quizCurrentIndex++;
    renderQuiz();
    updateHeaderUI();
  }, 1200);
}

// EVENT LISTENERS & NAVIGATION
function setupEventListeners() {
  // Navigation Tabs
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Search Bar - B1: Debounced search (200ms)
  const searchInput = document.getElementById("wordSearchInput");
  if (searchInput) {
    const debouncedSearch = debounce((value) => {
      appState.searchQuery = value;
      appState._skipCardAnimation = true;
      renderVocabGrid();
      renderPhrasesGrid();
      setTimeout(() => { appState._skipCardAnimation = false; }, 300);
    }, 200);
    searchInput.addEventListener("input", (e) => {
      debouncedSearch(e.target.value.trim());
    });
  }

  // Level Filter Buttons
  document.querySelectorAll(".level-filter-btn[data-level]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".level-filter-btn[data-level]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.activeLevel = btn.getAttribute("data-level");
      renderVocabGrid();
    });
  });

  // Load More Button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      appState.cardsDisplayedCount += 12;
      renderVocabGrid();
    });
  }

  // Check-in Button
  const checkinBtn = document.getElementById("checkinBtnNav");
  if (checkinBtn) {
    checkinBtn.addEventListener("click", openCheckinModal);
  }

  // Theme Toggle - B5: Persist theme to localStorage
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      themeBtn.innerText = next === "dark" ? "🌙" : "☀️";
      appState.theme = next;
      saveState();
    });
  }

  // Login Form
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = document.getElementById("usernameInput").value;
      if (val) appState.userName = val;
      closeLoginGateway();
      saveState();
      renderAllComponents();
      showToast(`🚀 Welcome, ${appState.userName}!`);
    });
  }

  // Backdrop Overlay Click Listeners
  const checkinOverlay = document.getElementById("checkinOverlay");
  if (checkinOverlay) {
    checkinOverlay.addEventListener("click", (e) => {
      if (e.target === checkinOverlay) closeCheckinModal();
    });
  }

  const gatewayOverlay = document.getElementById("gatewayOverlay");
  if (gatewayOverlay) {
    gatewayOverlay.addEventListener("click", (e) => {
      if (e.target === gatewayOverlay) closeLoginGateway();
    });
  }

  // Escape key handler for closing active modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCheckinModal();
      closeLoginGateway();
      const avatarOverlay = document.getElementById("avatarPickerOverlay");
      if (avatarOverlay && avatarOverlay.classList.contains("active")) {
        closeAvatarPicker();
      }
    }
  });

  // B3: GSAP press-scale event delegation for circular buttons
  if (canAnimate()) {
    const pressTargets = ".audio-btn-circular, .phrase-audio-btn, .star-btn, .speed-pill-btn";
    // Guard: e.target may be a text node or document, which lacks .closest()
    const getPressTarget = (e) => e.target instanceof Element ? e.target.closest(pressTargets) : null;
    document.addEventListener("pointerdown", (e) => {
      const el = getPressTarget(e);
      if (el) gsap.to(el, { scale: 0.85, duration: 0.1, overwrite: "auto" });
    });
    document.addEventListener("pointerup", (e) => {
      const el = getPressTarget(e);
      if (el) gsap.to(el, { scale: 1, duration: 0.25, ease: "back.out(2)", overwrite: "auto" });
    });
    document.addEventListener("pointerleave", (e) => {
      const el = getPressTarget(e);
      if (el) gsap.to(el, { scale: 1, duration: 0.2, ease: "back.out(1.5)", overwrite: "auto" });
    }, true);
  }

  // Profile Name Enter Key Handler
  setupProfileNameEnterKey();

  // Claim Daily Reward Button
  const claimRewardBtn = document.getElementById("claimRewardBtn");
  if (claimRewardBtn) {
    claimRewardBtn.addEventListener("click", handleClaimReward);
  }

  // Supabase Auth State Listener
  initSupabaseAuthListener();
}

async function handleGoogleLogin() {
  if (typeof signInWithGoogle === "function") {
    showToast("🌐 Redirecting to Google Auth... (国内访问需开启 VPN/梯子)");
    const success = await signInWithGoogle();
    if (!success) {
      showToast("⚠️ 无法连接至 Google。国内访问请开启科学上网/VPN，或使用免登录模式！");
    }
  } else {
    showToast("ℹ️ Google Auth requires Supabase API credentials!");
  }
}

function initSupabaseAuthListener() {
  if (typeof getSupabase === "function") {
    const client = getSupabase();
    if (client) {
      // Listen for auth state events (e.g. login, logout, OAuth redirect)
      client.auth.onAuthStateChange(async (event, session) => {
        handleAuthSession(session);
      });

      // Also check existing session on page load
      client.auth.getSession().then(({ data }) => {
        if (data && data.session) {
          handleAuthSession(data.session);
        }
      }).catch((err) => console.warn("Session fetch err:", err));
    }
  }
}

async function handleAuthSession(session) {
  if (!session || !session.user) return;

  appState.userAuth = session.user;
  const fallbackName =
    session.user.user_metadata?.full_name ||
    session.user.user_metadata?.name ||
    session.user.email?.split("@")[0] ||
    "Panda Student";

  try {
    let dbProfile = typeof syncUserProfileDB === "function"
      ? await syncUserProfileDB(session.user.id)
      : null;

    if (!dbProfile && typeof ensureUserProfileDB === "function") {
      await ensureUserProfileDB(session.user.id, { ...appState, userName: fallbackName });
      dbProfile = await syncUserProfileDB(session.user.id);
    }

    if (dbProfile) {
      appState.userName = dbProfile.display_name || fallbackName;
      appState.userStars = dbProfile.gold_stars ?? appState.userStars;
      appState.userStreakDays = dbProfile.streak_days ?? appState.userStreakDays;
      appState.langBase = dbProfile.native_lang || appState.langBase;
      appState.userAvatarUrl = dbProfile.avatar_url || "";
    } else {
      appState.userName = fallbackName;
    }

    if (typeof loadLearningProgressDB === "function") {
      appState.learnedWordIds = await loadLearningProgressDB(session.user.id);
    }
    if (typeof loadCheckinStateDB === "function") {
      const checkinState = await loadCheckinStateDB(session.user.id);
      appState.checkinWeek = checkinState.week;
      appState.checkinClaimedDays = checkinState.claimedDays;
    }
  } catch (error) {
    console.warn("Could not load cloud progress", error);
    appState.userName = fallbackName;
    showToast("Signed in, but cloud progress is temporarily unavailable.");
  }

  closeLoginGateway();
  saveState();
  renderAllComponents();
  showToast(`Logged in as ${appState.userName}.`);
}

// CINEMATIC PAGE TRANSITION STATE
let _isTransitioning = false;
const _tabOrder = ["dashboard", "vocab", "quiz", "profile", "voice"];

function switchTab(tabName) {
  if (_isTransitioning) return; // Prevent double-clicks during transition

  const currentTab = appState.currentTab || "dashboard";
  if (currentTab === tabName) {
    // Same tab - just scroll to top smoothly
    const sec = document.getElementById(`tab-${tabName}`);
    if (sec) {
      if (canAnimate()) {
        gsap.to(sec, { scrollTop: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
      } else {
        sec.scrollTop = 0;
      }
    }
    return;
  }

  // Determine direction for slide animation (1 = forward, -1 = backward)
  const currentIdx = _tabOrder.indexOf(currentTab);
  const nextIdx = _tabOrder.indexOf(tabName);
  const direction = nextIdx > currentIdx ? 1 : -1;

  const currentSec = document.getElementById(`tab-${currentTab}`);
  const targetSec = document.getElementById(`tab-${tabName}`);
  const activeTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${tabName}"]`);
  const activeMobileBtn = document.querySelector(`.mobile-nav-item[data-mobile-tab="${tabName}"]`);
  const prevTabBtn = document.querySelector(`.nav-tab-btn[data-tab="${currentTab}"]`);
  const prevMobileBtn = document.querySelector(`.mobile-nav-item[data-mobile-tab="${currentTab}"]`);
  const overlay = document.getElementById("pageTransitionOverlay");
  const wipe1 = overlay ? overlay.querySelector(".pto-wipe-1") : null;
  const wipe2 = overlay ? overlay.querySelector(".pto-wipe-2") : null;
  const mascot = overlay ? overlay.querySelector(".pto-mascot") : null;

  _isTransitioning = true;

  // Update nav state immediately for responsive feel
  document.querySelectorAll(".nav-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".mobile-nav-item").forEach(b => b.classList.remove("active"));
  if (activeTabBtn) activeTabBtn.classList.add("active");
  if (activeMobileBtn) activeMobileBtn.classList.add("active");

  if (!canAnimate() || prefersReducedMotion) {
    // Reduced-motion / no-GSAP fallback: instant switch
    if (currentSec) { currentSec.classList.remove("page-active"); currentSec.classList.remove("page-exiting"); }
    if (targetSec) {
      targetSec.classList.add("page-active");
      targetSec.scrollTop = 0;
    }
    appState.currentTab = tabName;
    _isTransitioning = false;
    _onPageVisible(tabName);
    return;
  }

  // === CINEMATIC GSAP PAGE TRANSITION ===
  const tl = gsap.timeline({
    onComplete: () => {
      _isTransitioning = false;
      _onPageVisible(tabName);
    }
  });

  // Phase 1: Current page EXITS (0 - 0.3s)
  if (currentSec) {
    currentSec.classList.add("page-exiting");
    tl.to(currentSec, {
      autoAlpha: 0,
      x: -30 * direction,
      y: 10,
      scale: 0.96,
      filter: "blur(6px)",
      duration: 0.32,
      ease: "power2.inOut",
      overwrite: "auto"
    }, 0);
  }

  // Phase 2: Wipe OVERLAY sweeps in (0.2 - 0.55s)
  if (overlay && wipe1 && wipe2) {
    tl.set(overlay, { autoAlpha: 1, pointerEvents: "none" }, 0.15);
    tl.to(wipe1, { height: "52%", duration: 0.38, ease: "power3.inOut" }, 0.18);
    tl.to(wipe2, { height: "52%", duration: 0.38, ease: "power3.inOut" }, 0.18);

    // Panda mascot pops in the middle of the wipe
    if (mascot) {
      tl.fromTo(mascot,
        { scale: 0, rotation: -30, autoAlpha: 0 },
        { scale: 1, rotation: 0, autoAlpha: 1, duration: 0.35, ease: "back.out(1.8)" },
        0.32
      );
    }
  }

  // Phase 3: SWAP pages (at 0.55s - middle of wipe when fully covered)
  tl.add(() => {
    if (currentSec) {
      currentSec.classList.remove("page-active");
      currentSec.classList.remove("page-exiting");
      gsap.set(currentSec, { clearProps: "transform,opacity,visibility,filter,x,y,scale" });
    }
    if (targetSec) {
      targetSec.classList.add("page-active");
      targetSec.scrollTop = 0;
      // Pre-set entrance state
      gsap.set(targetSec, {
        autoAlpha: 0,
        x: 40 * direction,
        y: 10,
        scale: 0.96,
        filter: "blur(8px)"
      });
      // Pre-set inner children for stagger (direct children of page-inner)
      const innerChildren = targetSec.querySelectorAll(".page-inner > *");
      if (innerChildren.length) {
        gsap.set(innerChildren, { autoAlpha: 0, y: 25, scale: 0.95 });
      }
    }
    appState.currentTab = tabName;
  }, 0.55);

  // Phase 4: Wipe retreats (0.6 - 0.95s)
  if (overlay && wipe1 && wipe2) {
    if (mascot) {
      tl.to(mascot, { scale: 1.3, autoAlpha: 0, rotation: 20, duration: 0.25, ease: "power2.in" }, 0.6);
    }
    tl.to(wipe1, { height: "0%", duration: 0.4, ease: "power3.inOut" }, 0.62);
    tl.to(wipe2, { height: "0%", duration: 0.4, ease: "power3.inOut" }, 0.62);
    tl.to(overlay, { autoAlpha: 0, duration: 0.2, ease: "power2.in" }, 0.95);
  }

  // Phase 5: New page ENTERS (0.62 - 1.0s)
  if (targetSec) {
    tl.to(targetSec, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.55,
      ease: "power2.out",
      overwrite: "auto"
    }, 0.62);

    // Stagger inner children for silky reveal
    const innerChildren = targetSec.querySelectorAll(".page-inner > *");
    if (innerChildren.length) {
      tl.to(innerChildren, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.07,
        ease: "power2.out",
        overwrite: "auto"
      }, 0.7);
    }
  }

  // Mobile nav icon bounce
  if (activeMobileBtn) {
    const icon = activeMobileBtn.querySelector(".mobile-nav-icon");
    if (icon) {
      tl.fromTo(icon,
        { y: 0, scale: 1 },
        { y: -6, scale: 1.25, duration: 0.25, yoyo: true, repeat: 1, ease: "back.out(2)", overwrite: "auto" },
        0.7
      );
    }
  }
}

// Helper: Called when a new page becomes fully visible
function _onPageVisible(tabName) {
  // Refresh ScrollTrigger (if any) and re-render page-specific content
  if (typeof ScrollTrigger !== "undefined") {
    setTimeout(() => {
      try { ScrollTrigger.refresh(); } catch(e) {}
    }, 50);
  }
  // Ensure content for this page is rendered/updated
  if (tabName === "vocab") {
    if (appState.cardsDisplayedCount < 12) appState.cardsDisplayedCount = 12;
    renderCategoryPills();
    renderVocabGrid();
  } else if (tabName === "quiz") {
    renderQuiz();
  } else if (tabName === "dashboard") {
    renderDailyWord();
    renderBadgesPanel();
    renderPhrasesGrid();
  } else if (tabName === "profile") {
    renderProfilePage();
  } else if (tabName === "voice") {
    // Initialize VoiceAgent when the page first becomes visible
    if (typeof VoiceAgent !== "undefined") {
      VoiceAgent.init();
    }
  }
  updateHeaderUI();
}

function selectLangBase(lang) {
  appState.langBase = lang;
  const enCard = document.getElementById("verCardEn");
  const esCard = document.getElementById("verCardEs");
  if (enCard) enCard.classList.toggle("selected", lang === "en");
  if (esCard) esCard.classList.toggle("selected", lang === "es");

  // Update profile page language buttons
  const profileLangEn = document.getElementById("profileLangEn");
  const profileLangEs = document.getElementById("profileLangEs");
  if (profileLangEn) profileLangEn.classList.toggle("active", lang === "en");
  if (profileLangEs) profileLangEs.classList.toggle("active", lang === "es");

  saveState();
  syncProfileToCloud();
  updateHeaderUI();
  renderVocabGrid();
  renderQuiz();

  showToast(lang === "en" ? "🇺🇸 Language: English" : "🇪🇸 Idioma: Español");
}

// C4: GSAP SPRING-PHYSICS MODAL ANIMATION
function openModalGSAP(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  const card = overlay.querySelector(".gateway-card");
  overlay.classList.add("active");

  if (!canAnimate()) {
    // Fallback: set visible state via inline styles (gsap may be undefined)
    if (card) {
      card.style.opacity = "1";
      card.style.transform = "none";
    }
    return;
  }
  if (card) {
    gsap.fromTo(card,
      { autoAlpha: 0, y: 40, scale: 0.8 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.6)", overwrite: "auto" }
    );
  }
}

function closeModalGSAP(overlayId, callback) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) { if (callback) callback(); return; }
  const card = overlay.querySelector(".gateway-card");

  if (!canAnimate()) {
    overlay.classList.remove("active");
    if (callback) callback();
    return;
  }
  if (card) {
    gsap.to(card, {
      autoAlpha: 0, y: 20, scale: 0.9, duration: 0.2, ease: "power2.in", overwrite: "auto",
      onComplete: () => {
        overlay.classList.remove("active");
        if (callback) callback();
      }
    });
  } else {
    overlay.classList.remove("active");
    if (callback) callback();
  }
}

function openLoginGateway() {
  openModalGSAP("gatewayOverlay");
}

function closeLoginGateway() {
  closeModalGSAP("gatewayOverlay");
}

function openCheckinModal() {
  const grid = document.getElementById("checkinGrid");
  const weekNum = appState.checkinWeek || 1;
  const days = [1, 2, 3, 4, 5, 6, 7];

  const checkinTitle = document.getElementById("checkinTitle");
  const checkinSubtitle = document.getElementById("checkinSubtitle");

  if (checkinTitle) {
    checkinTitle.innerText = `Week ${weekNum} Daily Rewards (第 ${weekNum} 周签到岛)`;
  }
  if (checkinSubtitle) {
    checkinSubtitle.innerText = `Complete Week ${weekNum} check-ins to advance to Week ${weekNum + 1}! Claim daily gold stars & bonus rewards.`;
  }

  grid.innerHTML = days.map(d => {
    const isClaimed = appState.checkinClaimedDays.includes(d);
    const isBig = d === 7;
    const dayStars = isBig ? (d * 10 + 100) : (d * 10);
    return `
      <div class="checkin-day-card ${isClaimed ? 'claimed' : ''} ${isBig ? 'big-reward' : ''}">
        <div class="day-title">Day ${d}</div>
        <div class="day-icon">${isBig ? '🎁' : '⭐'}</div>
        <div style="font-weight:800; font-size:12px;">+${dayStars} Stars</div>
      </div>
    `;
  }).join("");

  const claimBtn = document.getElementById("claimRewardBtn");
  const today = new Date().toLocaleDateString("en-CA");
  const isAlreadyCheckedInToday = appState.lastCheckinDate === today;
  const currentClaimed = appState.checkinClaimedDays ? appState.checkinClaimedDays.length : 0;

  if (claimBtn) {
    if (isAlreadyCheckedInToday) {
      if (currentClaimed >= 7) {
        claimBtn.innerText = `✅ Week ${weekNum} Completed! Tomorrow Starts Week ${weekNum + 1} 🚀`;
      } else {
        claimBtn.innerText = `✅ Week ${weekNum} Day ${currentClaimed} Claimed! Come Back Tomorrow`;
      }
      claimBtn.style.opacity = "0.8";
    } else if (currentClaimed >= 7) {
      claimBtn.innerText = `🚀 Start Week ${weekNum + 1} Check-in (进入第 ${weekNum + 1} 周签到)!`;
      claimBtn.style.opacity = "1";
    } else {
      claimBtn.innerText = `🎁 Claim Week ${weekNum} Day ${currentClaimed + 1} Reward ⭐`;
      claimBtn.style.opacity = "1";
    }
  }

  openModalGSAP("checkinOverlay");

  if (canAnimate()) {
    gsap.fromTo("#checkinGrid .checkin-day-card",
      { autoAlpha: 0, y: 20, scale: 0.8 },
      { autoAlpha: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.35, ease: "back.out(1.5)", overwrite: "auto", delay: 0.15 }
    );
  }
}

function closeCheckinModal() {
  closeModalGSAP("checkinOverlay");
}

// TOAST NOTIFICATION SYSTEM
function showToast(msg) {
  const toast = document.getElementById("toastContainer");
  const text = document.getElementById("toastMessage");
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 2500);
}

async function handleClaimReward(e) {
  const userId = getAuthenticatedUserId();
  if (!userId || typeof claimDailyRewardDB !== "function") {
    showToast("Please sign in to claim a daily reward.");
    return;
  }

  const button = e && e.currentTarget;
  if (button) button.disabled = true;

  try {
    const reward = await claimDailyRewardDB();
    if (!reward) throw new Error("Reward data was empty");

    appState.checkinWeek = reward.week_number;
    appState.userStars = reward.total_stars;
    appState.userStreakDays = reward.streak_days;

    if (typeof loadCheckinStateDB === "function") {
      const checkinState = await loadCheckinStateDB(userId);
      appState.checkinWeek = checkinState.week;
      appState.checkinClaimedDays = checkinState.claimedDays;
    }

    saveState();
    openCheckinModal();
    updateHeaderUI();
    checkAndUnlockBadges();

    showToast(`Claimed day ${reward.claimed_day}: +${reward.reward_stars} Gold Stars.`);
    if (button) {
      const rect = button.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  } catch (error) {
    console.warn("Daily reward claim failed", error);
    showToast("Today's reward could not be claimed. Please try again tomorrow.");
  } finally {
    if (button) button.disabled = false;
  }
}



// EVERYDAY CHINESE PHRASES & GREETINGS DATASET
const EVERYDAY_PHRASES = [
  {
    "id": "p1",
    "hanzi": "你好！",
    "pinyin": "Nǐ hǎo!",
    "en": "Hello!",
    "es": "¡Hola!",
    "emoji": "👋",
    "situation": "Greetings"
  },
  {
    "id": "p2",
    "hanzi": "早上好！",
    "pinyin": "Zǎo shang hǎo!",
    "en": "Good morning!",
    "es": "¡Buenos días!",
    "emoji": "☀️",
    "situation": "Greetings"
  },
  {
    "id": "p3",
    "hanzi": "晚安！",
    "pinyin": "Wǎn 'ān!",
    "en": "Good night!",
    "es": "¡Buenas noches!",
    "emoji": "🌙",
    "situation": "Greetings"
  },
  {
    "id": "p4",
    "hanzi": "谢谢你！",
    "pinyin": "Xiè xie nǐ!",
    "en": "Thank you!",
    "es": "¡Gracias!",
    "emoji": "🙏",
    "situation": "Politeness"
  },
  {
    "id": "p5",
    "hanzi": "不客气！",
    "pinyin": "Bù kè qi!",
    "en": "You're welcome!",
    "es": "¡De nada!",
    "emoji": "😊",
    "situation": "Politeness"
  },
  {
    "id": "p6",
    "hanzi": "再见！",
    "pinyin": "Zài jiàn!",
    "en": "Goodbye!",
    "es": "¡Adiós!",
    "emoji": "👋",
    "situation": "Farewell"
  },
  {
    "id": "p7",
    "hanzi": "对不起！",
    "pinyin": "Duì bu qǐ!",
    "en": "Sorry!",
    "es": "¡Lo siento!",
    "emoji": "🥺",
    "situation": "Politeness"
  },
  {
    "id": "p8",
    "hanzi": "没关系！",
    "pinyin": "Méi guān xi!",
    "en": "No problem!",
    "es": "¡No pasa nada!",
    "emoji": "👌",
    "situation": "Politeness"
  },
  {
    "id": "p9",
    "hanzi": "你好吗？",
    "pinyin": "Nǐ hǎo ma?",
    "en": "How are you?",
    "es": "¿Cómo estás?",
    "emoji": "❓",
    "situation": "Conversation"
  },
  {
    "id": "p10",
    "hanzi": "我很好！",
    "pinyin": "Wǒ hěn hǎo!",
    "en": "I am doing great!",
    "es": "¡Estoy muy bien!",
    "emoji": "😄",
    "situation": "Conversation"
  },
  {
    "id": "p11",
    "hanzi": "认识你很高兴！",
    "pinyin": "Rèn shi nǐ hěn gāo xìng!",
    "en": "Nice to meet you!",
    "es": "¡Encantado de conocerte!",
    "emoji": "🤝",
    "situation": "Conversation"
  },
  {
    "id": "p12",
    "hanzi": "祝你今天愉快！",
    "pinyin": "Zhù nǐ jīn tiān yú kuài!",
    "en": "Have a nice day!",
    "es": "¡Que tengas un buen día!",
    "emoji": "✨",
    "situation": "Wishes"
  },
  {
    "id": "p13",
    "hanzi": "明天见！",
    "pinyin": "Míng tiān jiàn!",
    "en": "See you tomorrow!",
    "es": "¡Hasta mañana!",
    "emoji": "🌅",
    "situation": "Farewell"
  },
  {
    "id": "p14",
    "hanzi": "加油！",
    "pinyin": "Jiā yóu!",
    "en": "Keep it up! / Go!",
    "es": "¡Ánimo! / ¡Vamos!",
    "emoji": "💪",
    "situation": "Encouragement"
  },
  {
    "id": "p15",
    "hanzi": "你太棒了！",
    "pinyin": "Nǐ tài bàng le!",
    "en": "You are awesome!",
    "es": "¡Eres genial!",
    "emoji": "🌟",
    "situation": "Encouragement"
  },
  {
    "id": "p16",
    "hanzi": "生日快乐！",
    "pinyin": "Shēng rì kuài lè!",
    "en": "Happy birthday!",
    "es": "¡Feliz cumpleaños!",
    "emoji": "🎂",
    "situation": "Celebration"
  },
  {
    "id": "p17",
    "hanzi": "我爱你！",
    "pinyin": "Wǒ ài nǐ!",
    "en": "I love you!",
    "es": "¡Te quiero!",
    "emoji": "❤️",
    "situation": "Affection"
  },
  {
    "id": "p18",
    "hanzi": "请问这个多少钱？",
    "pinyin": "Qǐng wèn zhè ge duō shao qián?",
    "en": "How much is this?",
    "es": "¿Cuánto cuesta esto?",
    "emoji": "🏷️",
    "situation": "Shopping"
  },
  {
    "id": "p19",
    "hanzi": "我不懂。",
    "pinyin": "Wǒ bù dǒng.",
    "en": "I don't understand.",
    "es": "No lo entiendo.",
    "emoji": "🤔",
    "situation": "Daily"
  },
  {
    "id": "p20",
    "hanzi": "没问题！",
    "pinyin": "Méi wèn tí!",
    "en": "No problem!",
    "es": "¡Sin problema!",
    "emoji": "👍",
    "situation": "Daily"
  },
  {
    "id": "p21",
    "hanzi": "请问，洗手间在哪里？",
    "pinyin": "Qǐng wèn, xǐ shǒu jiān zài nǎ lǐ?",
    "en": "Excuse me, where is the restroom?",
    "es": "Disculpe, ¿dónde está el baño?",
    "emoji": "🚻",
    "situation": "Directions"
  },
  {
    "id": "p22",
    "hanzi": "请问，地铁站在哪里？",
    "pinyin": "Qǐng wèn, dì tiě zhàn zài nǎ lǐ?",
    "en": "Excuse me, where is the subway station?",
    "es": "Disculpe, ¿dónde está la estación de metro?",
    "emoji": "🚇",
    "situation": "Directions"
  },
  {
    "id": "p23",
    "hanzi": "这个地方怎么走？",
    "pinyin": "Zhè ge dì fang zěn me zǒu?",
    "en": "How do I get to this place?",
    "es": "¿Cómo llego a este lugar?",
    "emoji": "🗺️",
    "situation": "Directions"
  },
  {
    "id": "p24",
    "hanzi": "在前面，一直走！",
    "pinyin": "Zài qián mian, yī zhí zǒu!",
    "en": "Go straight ahead!",
    "es": "¡Siga todo recto hacia adelante!",
    "emoji": "⬆️",
    "situation": "Directions"
  },
  {
    "id": "p25",
    "hanzi": "在左边 / 在右边",
    "pinyin": "Zài zuǒ bian / Zài yòu bian",
    "en": "On the left / On the right",
    "es": "A la izquierda / A la derecha",
    "emoji": "↔️",
    "situation": "Directions"
  },
  {
    "id": "p26",
    "hanzi": "离这里远吗？",
    "pinyin": "Lí zhè lǐ yuǎn ma?",
    "en": "Is it far from here?",
    "es": "¿Está lejos de aquí?",
    "emoji": "📍",
    "situation": "Directions"
  },
  {
    "id": "p27",
    "hanzi": "我想去飞机场。",
    "pinyin": "Wǒ xiǎng qù fēi jī chǎng.",
    "en": "I want to go to the airport.",
    "es": "Quiero ir al aeropuerto.",
    "emoji": "✈️",
    "situation": "Transport"
  },
  {
    "id": "p28",
    "hanzi": "到这里要多久？",
    "pinyin": "Dào zhè lǐ yào duō jiǔ?",
    "en": "How long does it take to get here?",
    "es": "¿Cuánto tiempo se tarda en llegar aquí?",
    "emoji": "⏱️",
    "situation": "Transport"
  },
  {
    "id": "p29",
    "hanzi": "我迷路了，请帮帮我！",
    "pinyin": "Wǒ mí lù le, qǐng bāng bang wǒ!",
    "en": "I am lost, please help me!",
    "es": "¡Estoy perdido, por favor ayúdeme!",
    "emoji": "🆘",
    "situation": "Help"
  },
  {
    "id": "p30",
    "hanzi": "请给我一杯水。",
    "pinyin": "Qǐng gěi wǒ yī bēi shuǐ.",
    "en": "Please give me a glass of water.",
    "es": "Por favor dame un vaso de agua.",
    "emoji": "🥛",
    "situation": "Dining"
  },
  {
    "id": "p31",
    "hanzi": "我想吃这个！",
    "pinyin": "Wǒ xiǎng chī zhè ge!",
    "en": "I want to eat this!",
    "es": "¡Quiero comer esto!",
    "emoji": "🍽️",
    "situation": "Dining"
  },
  {
    "id": "p32",
    "hanzi": "买单，谢谢！",
    "pinyin": "Mǎi dān, xiè xie!",
    "en": "Check, please!",
    "es": "¡La cuenta, por favor!",
    "emoji": "💳",
    "situation": "Dining"
  },
  {
    "id": "p33",
    "hanzi": "太贵了！",
    "pinyin": "Tài guì le!",
    "en": "Too expensive!",
    "es": "¡Es demasiado caro!",
    "emoji": "🏷️",
    "situation": "Shopping"
  },
  {
    "id": "p34",
    "hanzi": "医生在哪里？",
    "pinyin": "Yī shēng zài nǎ lǐ?",
    "en": "Where is the doctor?",
    "es": "¿Dónde está el doctor?",
    "emoji": "👩‍⚕️",
    "situation": "Health"
  },
  {
    "id": "p35",
    "hanzi": "危险，小心！",
    "pinyin": "Wēi xiǎn, xiǎo xīn!",
    "en": "Danger, be careful!",
    "es": "¡Peligro, cuidado!",
    "emoji": "⚠️",
    "situation": "Safety"
  },
  {
    "id": "p36",
    "hanzi": "我会说一点中文。",
    "pinyin": "Wǒ huì shuō yī diǎn zhōng wén.",
    "en": "I speak a little Chinese.",
    "es": "Hablo un poco de chino.",
    "emoji": "🗣️",
    "situation": "Language"
  },
  {
    "id": "p37",
    "hanzi": "请慢一点说。",
    "pinyin": "Qǐng màn yī diǎn shuō.",
    "en": "Please speak slower.",
    "es": "Por favor habla más despacio.",
    "emoji": "🐢",
    "situation": "Language"
  },
  {
    "id": "p38",
    "hanzi": "请再说一次。",
    "pinyin": "Qǐng zài shuō yī cì.",
    "en": "Please say it again.",
    "es": "Por favor dilo otra vez.",
    "emoji": "🔄",
    "situation": "Language"
  },
  {
    "id": "p39",
    "hanzi": "欢迎来到中国！",
    "pinyin": "Huān yíng lái dào zhōng guó!",
    "en": "Welcome to China!",
    "es": "¡Bienvenido a China!",
    "emoji": "🇨🇳",
    "situation": "Welcome"
  },
  {
    "id": "p40",
    "hanzi": "祝你旅途愉快！",
    "pinyin": "Zhù nǐ lǚ tú yú kuài!",
    "en": "Have a nice trip!",
    "es": "¡Que tengas un buen viaje!",
    "emoji": "🧳",
    "situation": "Travel"
  }
];

function renderPhrasesGrid() {
  const container = document.getElementById("phrasesGrid");
  if (!container) return;

  const isEs = appState.langBase === "es";
  const query = (appState.searchQuery || "").toLowerCase();

  let filtered = EVERYDAY_PHRASES;
  if (query) {
    filtered = EVERYDAY_PHRASES.filter(item => 
      item.hanzi.includes(query) ||
      item.pinyin.toLowerCase().includes(query) ||
      item.en.toLowerCase().includes(query) ||
      item.es.toLowerCase().includes(query) ||
      item.situation.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-container">
        <div class="empty-state-icon">🔍 💬</div>
        <h3 class="empty-state-title">${isEs ? "No se encontraron frases" : "No Matching Phrases"}</h3>
        <p class="empty-state-desc">${isEs ? "Intenta una de estas frases útiles" : "Try one of these useful phrases!"}</p>
        <div class="empty-state-suggestions">
          <button class="suggestion-chip" onclick="quickSearch('你好')">👋 你好</button>
          <button class="suggestion-chip" onclick="quickSearch('谢谢')">🙏 谢谢</button>
          <button class="suggestion-chip" onclick="quickSearch('洗手间')">🚻 洗手间</button>
          <button class="suggestion-chip" onclick="quickSearch('多少钱')">💰 多少钱</button>
        </div>
        <button class="btn-primary-3d empty-state-clear-btn" onclick="clearSearchInput()">${isEs ? "Limpiar" : "Clear Search"} 🔄</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="phrase-card">
      <div class="phrase-badge-emoji">${item.emoji}</div>
      <div class="phrase-content-col">
        <span class="phrase-situation-pill">${item.situation}</span>
        <div class="phrase-hanzi-text">${item.hanzi}</div>
        <div class="phrase-pinyin-text">${item.pinyin}</div>
        <div class="phrase-trans-text">${isEs ? item.es : item.en}</div>
      </div>
      <button class="phrase-audio-btn" onclick="speakMandarin('${item.hanzi.replace(/[！？，]/g, '')}')" title="Listen Mandarin Audio">🔊</button>
    </div>
  `).join("");

  // B6: Stagger entrance animation for phrase cards
  if (canAnimate() && !appState._skipCardAnimation) {
    gsap.fromTo("#phrasesGrid .phrase-card",
      { autoAlpha: 0, y: 30, scale: 0.9 },
      { autoAlpha: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.35, ease: "power2.out", overwrite: "auto" }
    );
  }
}

// ════════════════════════════════════════════════════════════════
// Voice Settings Panel (app-v7.js)
// closeVoiceSettings / resetVoiceSettings / updateTextOnlyMode
// are defined in voice-agent-v7.js via window.xxx
// ════════════════════════════════════════════════════════════════

var voiceSettings = {
  speed: 1.0,
};

function updateVoiceSpeed() {
  var slider = document.getElementById("voiceSpeedSlider");
  var display = document.getElementById("voiceSpeedValue");
  if (slider && display) {
    voiceSettings.speed = parseFloat(slider.value);
    display.textContent = voiceSettings.speed.toFixed(1) + "×";
    localStorage.setItem("kidsVoiceSpeed", voiceSettings.speed);
  }
}

// Restore speed setting on page load
document.addEventListener("DOMContentLoaded", function() {
  try {
    var savedSpeed = localStorage.getItem("kidsVoiceSpeed");
    if (savedSpeed) {
      voiceSettings.speed = parseFloat(savedSpeed);
      var slider = document.getElementById("voiceSpeedSlider");
      if (slider) slider.value = voiceSettings.speed;
      var display = document.getElementById("voiceSpeedValue");
      if (display) display.textContent = voiceSettings.speed.toFixed(1) + "×";
    }
  } catch (e) {}
});

// ESC key to close settings panel
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    if (window.closeVoiceSettings) window.closeVoiceSettings();
  }
});
