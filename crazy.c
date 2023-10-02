#include <stdio.h>
#include <unistd.h>

void printWithTypewriterEffect(const char *message, const char *emoji, int time) {
    for (const char *c = message; *c != '\0'; c++) {
        putchar(*c);
        fflush(stdout);
        usleep(100000); // Sleep for 100,000 microseconds (0.1 seconds) between characters for the typing effect
    }
    printf(" %s\n", emoji); 
    sleep(time);
}

int main() {

    const char *messages[] = {
        "Crazy?",
        "I Was Crazy Once.",
        "They Locked Me In A Room.",
        "A Rubber Room.",
        "A Rubber Room With Rats.",
        "And Rats Make Me Crazy."
    };

    const char *emojis[] = {
        "😜",
        "😵",
        "🔒",
        "🏥",
        "🐀",
        "🤡"
    };

    int numMessages = sizeof(messages) / sizeof(messages[0]);


    while (1) {
        for (int i = 0; i < numMessages; i++) {
            printWithTypewriterEffect(messages[i], emojis[i], (i == 0) ? 2 : 1);
        }
        printf("\n\n");
    }

    return 0;
}
