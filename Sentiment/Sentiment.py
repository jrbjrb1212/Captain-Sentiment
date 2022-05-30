import pandas as pd
from textblob import TextBlob
from sklearn.feature_extraction import text
import os

raw_data_path = "../Corpus/Transcripts/"
STOP_WORDS = {text.ENGLISH_STOP_WORDS}
print(type(STOP_WORDS))
sentiment_score = 0

# test
with open(raw_data_path + "Ant-Man_2015.txt", "r") as f:
    for line in f:
        cleaned_line = ""
        for word in line:
            if word not in STOP_WORDS:
                cleaned_line += word

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
