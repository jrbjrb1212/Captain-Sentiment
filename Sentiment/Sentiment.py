import pandas as pd
from textblob import TextBlob
from sklearn.feature_extraction import text
import os

raw_data_path = "../Corpus/Transcripts/"
STOP_WORDS = [
    'where', 'all', 'again', 'eleven', 'throughout', 'ourselves', 'then', 'of',
    'at', 'whole', 'for', 'into', 'a', 'hundred', 'alone', 'latterly',
    'always', 'everything', 'amoungst', 'upon', 'behind', 'thick', 'whom',
    'among', 'nothing', 'wherever', 'several', 'same', 'your', 'never',
    'yours', 'find', 'side', 'which', 'other', 'two', 'who', 'whether', 'mill',
    'beyond', 'are', 'she', 'next', 'somewhere', 'beforehand', 'full', 'eight',
    'not', 'such', 'everywhere', 'and', 'while', 'his', 'serious', 'by', 'us',
    'hasnt', 'nowhere', 'empty', 'much', 'ever', 'this', 'to', 'through',
    'from', 'show', 'go', 'very', 'somehow', 'once', 'against', 'would',
    'becoming', 'also', 'move', 'whatever', 'found', 'fire', 'one', 'these',
    'hereby', 'beside', 'me', 'together', 'toward', 'with', 'something',
    'although', 'less', 'himself', 'sixty', 'they', 'eg', 'become', 'third',
    'neither', 'what', 'themselves', 'ten', 'due', 'moreover', 'mostly',
    'back', 'out', 'itself', 'yourselves', 'see', 'cry', 'hereupon', 'myself',
    'thereafter', 'often', 'latter', 'many', 'yet', 'her', 'along', 'last',
    'thus', 'part', 'hers', 'already', 'whoever', 'nevertheless', 'almost',
    'i', 'interest', 'became', 'none', 'whenever', 'system', 'however', 'onto',
    'being', 'anywhere', 'herself', 'had', 'am', 'further', 'he', 'own', 'top',
    'another', 'even', 'becomes', 'rather', 'perhaps', 'whereby', 'without',
    'give', 'do', 'about', 'down', 'should', 'an', 'on', 'both', 'besides',
    'can', 'get', 'describe', 'fifteen', 'whereas', 'thereupon', 'below',
    'per', 'every', 'least', 'co', 'cannot', 'con', 'herein', 'nobody',
    'across', 'keep', 'have', 'front', 'after', 'couldnt', 'how', 'still',
    'made', 'else', 'up', 'wherein', 'any', 'meanwhile', 'fifty', 'him',
    'bottom', 'un', 'enough', 'detail', 'you', 'amongst', 'whence', 'etc',
    'ie', 'elsewhere', 'my', 'why', 'hereafter', 'well', 'except', 'we',
    'yourself', 'bill', 'de', 'most', 'because', 'been', 'twenty', 'sometimes',
    'only', 'over', 'others', 'will', 'six', 'someone', 'them', 'is', 'whose',
    'amount', 'seems', 'if', 'twelve', 'take', 'under', 'it', 'might', 'noone',
    'mine', 'nor', 'above', 'everyone', 'towards', 'was', 'done', 'otherwise',
    'four', 'until', 'seem', 'whereafter', 'or', 'cant', 'some', 'formerly',
    'their', 'its', 'too', 'therefore', 'now', 'the', 'nine', 'whither',
    'during', 'those', 'put', 'please', 'than', 'whereupon', 'indeed', 'must',
    'may', 'anyhow', 'former', 'thence', 'anyone', 'each', 'though', 'when',
    'around', 're', 'in', 'via', 'anything', 'more', 'our', 'seeming', 'five',
    'sometime', 'ours', 'here', 'so', 'there', 'fill', 'thin', 'sincere',
    'call', 'off', 'forty', 'be', 'were', 'seemed', 'could', 'thereby',
    'before', 'between', 'has', 'since', 'as', 'name', 'namely', 'therein',
    'few', 'either', 'within', 'afterwards', 'inc', 'hence', 'thru', 'first',
    'ltd', 'no', 'that', 'anyway', 'three', 'but'
]

sentiment_score = 0

# test
with open(raw_data_path + "Ant-Man_2015.txt", "r") as f:
    for line in f:
        # print(line)
        cleaned_line = ""
        for word in line.split():
            if word not in STOP_WORDS:
                cleaned_line += "\t" + word
        print(cleaned_line)

        print(str(TextBlob(cleaned_line).sentiment.polarity) + "\n")

# for (dirpath, dirnames, filenames) in os.walk(raw_data_path):
#     for filename in filenames:
#         with open(dirpath + filename, "r") as f:
#             for line in f:
#                 clearned_line = ""
#                 for word in line:
#                     if word not in STOP_WORDS:
#                         cleaned_line += word
#                 print(str(TextBlob(clearned_line).sentiment.polarity) + "\n")
#         print("")
