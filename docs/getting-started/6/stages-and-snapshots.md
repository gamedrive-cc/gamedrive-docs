---
sidebar_position: 7
title: Stages and Snapshots
slug: /getting-started/stages-and-snapshots
---

## What are Snapshots?

Snapshot is a save of all setup of a project at a moment that you created one. The save not include data in database such as data of Customer Data collection but collect only Custom Data meta such as name, description and schema.

You can create many snapshots as you want, you can delete and copy old snapshot to new.

## How to create a snapshot?

1. Go to Snapshot menu on sidebar and click on New snapshot button on top right.

![List snapshot](\img\docs\getting-started\6\01-snapshot-list.png)


2. Input description of the snapshot then click Create button. This will take some time to load as project grow bigger.

![New Snapshot](\img\docs\getting-started\6\02-new-snapshot.png)

Finally, you have a new snapshot

![Snapshot Detail](\img\docs\getting-started\6\03-snapshot-detail.png)


## What is PREVIEW stage?

When you working on a project, you doing in PREVIEW stage. When you run test endpoints, you doing in PREVIEW stage also.
PREVIEW stage is a environment for developing and testing.

## What is Diff?

After you created a new snapshot without any changes futher, your PREVIEW stage is equal to the latest snapshot. If you make change in code editor or any component, you will have changes of PREVIEW stage to the latest snapshot. This changes called Diff.

## How to view Diff?

1. After made a new snapshot above, try to edit something in you project. Let's create a new Endpoint.

![New endpoint](\img\docs\getting-started\6\04-new-endpoint-to-see-diff.png)


2. Go to Snapshots menu on sidebar and click on the latest snapshot on top to view snapshot's detail.

![Snapshot List](\img\docs\getting-started\6\05-snapshot-list2.png)

Then click on Find Changes button. It may take some time to load before show up the Diff viewer.

![Snapshot Detail](\img\docs\getting-started\6\06-snapshot-detail.png)

Diff Viewer will show up and show that we have new snapshot created

![Snapshot Detail](\img\docs\getting-started\6\07-snapshot-diff-viewer-show-up.png)



3. You can try to use Discard all change if exist button, and click on Find Changes button again.
   You will see now Diff viewer show up since no changes exist anymore.

![Snapshot Detail No Changes](\img\docs\getting-started\6\08-snapshot-diff-viewer-not-changes.png)

## How to revert PREVIEW stage to old snapshot?

1. Let's make some changes by create new Endpoint again. Then create another snapshot.

![Make second snapshot](\img\docs\getting-started\6\09-make-second-snapshot.png)


2. We can make PREVIEW stage equal to a snapshot by to go the first snapshot detail and click on [Copy To New] button

![Make second snapshot](\img\docs\getting-started\6\10-show-copy-to-new-button.png)

The copied version of snapshot will show up

![Copied snapshot will show up](\img\docs\getting-started\6\11-new-copied-snapshot-will-showup.png)

Now, check on the endpoint list page. The new Endpoint you just created on step 1. is gone.

To make the new snapshot came back, you can just go to the second snapshot and do Copy To New again.


## What is LIVE stage and why we need it?

When we want to serve our works on GameDrive to real players, we should publish a snapshot to LIVE stage.

On LIVE stage, database collection is separated from the PREVIEW stage. This allow us to continue working or testing on PREVIEW stage without interfere to real players data.

This 2 stages machanism also help us to rollback when something went wrong on the latest LIVE snapshot. We can just to the old working fine snapshot and re-publish it to LIVE.

# How To publish a snapshot to LIVE?

1. Go to the snapshot's detail page. Click on Compile and Prepare button.

![Compile and Prepare](\img\docs\getting-started\6\12-compile-and-prepare.png)

Wait until it finish and change to Publish to Live button.


2. Click on the Publish to Live button.

![Publish snapshot](\img\docs\getting-started\6\13-publish-to-live.png)


3. Finally the snapshot will have a label Live show up which mean this snapshot is on LIVE now.

![Live snapshot](\img\docs\getting-started\6\14-live-label-show-up.png)

## Will server down while publishing new snapshot to LIVE?

Server will NOT down while publishing new snapshot to LIVE stage. The old requests on the server will keep working on old vm until the new vm from new published snapshot come to replace.
