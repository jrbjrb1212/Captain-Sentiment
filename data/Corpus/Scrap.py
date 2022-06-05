import requests
from bs4 import BeautifulSoup


# open txt file containing all URLs for movies to strip
def main():
    name = ""
    record = []
    with open("websites.txt", "r") as f:
        for line in f:
            record = []
            if line.find("https") != -1:
                r = requests.get(line)
                doc = BeautifulSoup(r.text, "html.parser")

                for tag in doc.findAll('p'):
                    if tag.name not in ['p']:
                        continue
                    record.append(
                        string_edit(tag.renderContents().decode('UTF-8')))

                format_output(record, name)
                print("Done stripping " + name)
            else:
                name = ""
                for char in line:
                    if char == ' ':
                        name += "_"
                        continue
                    name += char
                print("*************************")
                print("Now stripping " + name)


def string_edit(string):
    return_word = ""
    NON_VALID_WORDS = [
        "<br/>", "-", "...", ".", "!", ",", "<div", "<script>", "||", "[]",
        "class=\"ads", ">", "<", "<p>", "♪♪♪"
    ]
    for word in string.split():
        for entry in NON_VALID_WORDS:
            if entry in word:
                for split in word.split(entry):
                    if split != '':
                        return_word = return_word + " " + split
                break

        else:
            return_word = return_word + " " + word
    return return_word


def format_output(record, name):
    # remove first entry and last 3 entries as they are not actual script
    record = record[1:-4]
    i = 0
    wordcount = 0
    filepath = "Transcripts/" + name + ".txt"
    with open(filepath, "w") as out:
        out.write(name + "\n")
        for line in record:
            wordcount += len(line.split())

        for line in record:
            for word in line.split():
                # if word.isalpha():
                out.write(word.lower() + "\t")
                i += 1
                if i == wordcount // 40:
                    out.write("\n")
                    i = 0
        out.write("\nWord count: " + str(wordcount) + " words")


main()