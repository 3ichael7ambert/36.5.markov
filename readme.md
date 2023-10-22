# Markov Text Generator

The Markov Text Generator is a command-line tool for generating random text using a Markov chain. It takes input text from either a local file or a URL and generates new text based on the patterns and probabilities of word sequences in the input.

## Features

- Generate random text using a Markov chain.
- Supports both local text files and URLs as input sources.
- Customizable output length.

## Prerequisites

Before running the Markov Text Generator, make sure you have the following installed:

- [Node.js](https://nodejs.org/)

## Installation

1. Clone this repository or download the source code to your local machine.

```bash
git clone https://github.com/3ichael7ambert/36.5.markov.git
```

2. Navigate to the project directory:

```bash
cd 36.5.markov
```

3. Install project dependencies using npm:

```bash
npm install
```

## Usage

### Generating Text from a Local File

To generate text from a local text file, use the following command:

```bash
node makeText.js eggs.txt
```


### Generating Text from a URL

To generate text from a URL, use the following command:

```bash
node makeText.js url http://www.example.com/your-text-file.txt
```

Replace `http://www.example.com/your-text-file.txt` with the URL of your text source.

