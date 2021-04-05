# IPFS (InterPlanetary File System)

What is IPFS?

- **Distributed** system for storing, and accessing files (or applications)

Storage System?

- Amazon S3 (centralized)
- Dropbox (centralized)
- Google Drive (centralized)

Advantages of a Distributed Storage System?

1. Resiliency

- Can't go down, has backups across the world

2. Censorship Resistant

- eg. Parler on AWS

3. Speed

- Physical distance
- Local networks that are not well connected to the broader internet

4. Large Files

- Store bits and pieces across nodes

# Content Based Addressing

How are files identified?
In today's world:

- https://en.wikipedia.org/wiki/Dog
- https://wikipedia-clone.com/wiki/Dog
- ...
- https://wikipedia-master.com/wiki/Dog

This is called **Location Based Addressing**

Instead of a file's location, a file is addressed based on **whats inside it**
Or, the content of the file

### Content Identifier (CID)

You have a file `hello.txt`
Content:

```
Hello World
```

CID = Cryptographic Hash (content)
CID = Hash("Hello World") = QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco

### Functions of a Storage System

- Add (Upload)
  - Upload a file
  - Calculate CID
  - Return CID
- Get (Download)
  - Input CID
  - Lookup CID
  - Download
- Read
  - Input CID
  - Lookup CID
  - Read
- Delete (?)
  - Permanent deletion only possible if no node in the world has a copy of the file anymore

# Incentives

## Why run an IPFS node?

Introducing FILECOIN.

Rental Fees

- File Size (The larger the file, the more the rental fees)
- Duration (The longer the duration, the more the rental fees)

## Costs

Why would user choose to upload on IPFS compared to S3 or Google Drive?

IPFS is over 10x cheaper than centralized storage solutions
