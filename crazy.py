import sys
import time

def print_with_typewriter_effect(message, emoji, t):
    for char in message:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(0.01)  # Sleep for 0.1 seconds between characters for the typing effect
    print(" " + emoji)
    time.sleep(t)

def main():
    sentences = [
        "Crazy?",
        "I Was Crazy Once.",
        "They Locked Me In A Room.",
        "A Rubber Room.",
        "A Rubber Room With Rats.",
        "And Rats Make Me Crazy.",
    ]

    emojis = ["😜", "😵", "🔒", "🏥", "🐀", "🤡"]

    for i in range(len(sentences)):
        print_with_typewriter_effect(sentences[i], emojis[i], 2 if i == 0 else 1)
    print('\n')

    while True:
        for i in range(len(sentences)):
            print_with_typewriter_effect(sentences[i], emojis[i], 2 if i == 0 else 1)
        print('\n')

if __name__ == "__main__":
    main()
