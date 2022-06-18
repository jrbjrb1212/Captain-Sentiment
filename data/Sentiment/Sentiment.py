import pandas as pd
from textblob import TextBlob
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
    'back', 'out', 'itself', 'yourselves', 'see', 'hereupon', 'myself',
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

for (dirpath, dirnames, filenames) in os.walk(raw_data_path):
    for filename in filenames:
        word_count = 0
        line_wordcount = []
        line_polarity = []
        line_subjectivity = []
        print(dirpath + filename)
        outname = filename.split("\n.txt")[0]
        with open(dirpath + filename, "r") as f:
            # out_path = "Sentiment_over_time/" + filename + "_sentiment.txt"
            out_path = "Sentiment_TEST/" + outname + "_sentiment.txt"
            with open(out_path, "w") as out:
                # out.write(f"Name,Polarity,Length,Subjectivity\n")

                for line in f:
                    if len(line) > 100:
                        cleaned_line = ""
                        for word in line.split():
                            if word not in STOP_WORDS:
                                cleaned_line += "\t" + word
                            word_count += 1
                        line_polarity.append(
                            str("{:.4f}".format(
                                TextBlob(cleaned_line).sentiment.polarity)))
                        line_wordcount.append(str(word_count))
                        line_subjectivity.append(
                            str("{:.4f}".format(
                                TextBlob(
                                    cleaned_line).sentiment.subjectivity)))

                # write here
                out.write(f"movieName: \"{outname}\",")
                out.write(f"\npolarity: {line_polarity},")
                out.write(f'\nlengthData: {line_wordcount},')
                out.write(f'\nsubjectivty: {line_subjectivity},')

                # line_polarity = str("{:.4f}".format(
                #     TextBlob(cleaned_line).sentiment.polarity))
                # line_subjectivity = str("{:.4f}".format(
                #     TextBlob(cleaned_line).sentiment.subjectivity))

                # out.write(
                #     f"{outname},{line_polarity},{str(word_count)},{line_subjectivity}\n"
                # )

                # out.write(
                #     f"Interval Stop Word Count: {str(word_count)} \n")
                # out.write(
                #     f'Polarity: {str(TextBlob(cleaned_line).sentiment.polarity)} \n'
                # )
                # out.write(
                #     f'Subjectivity: {str(TextBlob(cleaned_line).sentiment.subjectivity)} \n'
                # )
