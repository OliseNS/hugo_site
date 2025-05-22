---
title: "EEG Clustering and Model Evaluation"
date: 2023-04-15
draft: false
tags: ["data-science", "machine-learning", "eeg", "clustering", "ann"]
image: "assets/dither_it_module_PA4_cluster_TrainValidateData_CPz.csv.png"
summary: "Explore EEG feature clustering using KMeans and evaluate clustering metrics like cohesion and silhouette score."
githubUrl: "https://github.com/yourusername/eeg-clustering"
---

# EEG Clustering and Model Evaluation

## Project Overview

This project explores electroencephalogram (EEG) feature clustering using KMeans algorithm and evaluates different clustering metrics including cohesion and silhouette scores to determine optimal cluster configurations for brain signal analysis.

## Key Features

- Implementation of KMeans clustering on EEG feature data
- Evaluation of clustering quality using silhouette scores and cohesion metrics
- Visualization of feature clusters and decision boundaries
- Comparison of different preprocessing techniques for improved clustering results

## Technologies Used

- Python
- scikit-learn
- NumPy & Pandas
- Matplotlib & Seaborn
- SciPy

## Results

The analysis revealed distinct clusters in the EEG data that correspond to different brain activity patterns. The optimal configuration was determined to be 3 clusters based on silhouette analysis. Further refinement of features using PCA improved the cluster separation.

## Future Work

Future work includes applying deep learning techniques for more sophisticated feature extraction and exploring other clustering algorithms like DBSCAN and hierarchical clustering to compare performance.
