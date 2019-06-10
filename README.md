# Iconographic News

Luke Wulf, lwulf@ucsd.edu

## Abstract Proposal

  As the world gets more technologically advanced, I see the term of Artificial Intelligence (AI) becoming increasingly personified.  However, when one speaks of an intelligence, it implies that the intelligent thing has some form of perspective on its environment.  And, with the unique case of AI, it can become hard to realize this perspective due to the virtual nature of the intelligence.  Therefore, in this project I attempted to visualize how an AI would interpret headlines of itself by having it first process what a headline was about, and then having it map this meaning into the form of a drawing.
.

## Project Report

final.pdf

## Model/Data

- News Articles: newsapi.org
- SketchRNN ML5 Trained Models: ml5js.org

## Code

- Jupyter notebooks: ECE188_Final_HeadlinesToSketchRNN.ipynb
-  Grabs most recent news headlines related to AI and parses out meaning from titles, which are then mapped to model classes

- Processing: final.js
-  Visualizing the parsed data in the form of a sketch using ml5

## Results

Two examples of the produced output:
- amazonNewsTitle.png
- sentinelOne188.png


## Technical Notes

You must register a token to use the newsAPI, my token has been removed in the public repo
You must pip install the newsAPI package to use the api
You must have a pen plotter with driver to visualize physically

## Reference

ml5js.org
p5js.org
newsapi.org
