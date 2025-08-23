import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      'Getting Started': [
        {
          type: 'doc',
          id: 'getting-started/0/intro',
          label: 'Getting Started Introduction',
        },
        {
          type: 'doc',
          id: 'getting-started/1/signup-to-create-new-project',
          label: 'Create new project',
        },
        {
          type: 'doc',
          id: 'getting-started/2/create-endpoint-and-write-logic',
          label: 'Create and use Endpoint',
        },
        {
          type: 'doc',
          id: 'getting-started/3/endpoint-print-log-and-show-logs-page',
          label: 'Print logs',
        },
        {
          type: 'doc',
          id: 'getting-started/4/storing-data-via-custom-data',
          label: 'Storing data via Custom Data',
        },
        {
          type: 'doc',
          id: 'getting-started/5/use-virtual-good-and-create-leaderboard',
          label: 'Storing data via Virtual Good and create a leaderboard',
        },
        {
          type: 'doc',
          id: 'getting-started/6/stages-and-snapshots',
          label: 'Stages and Snapshots',
        },
        {
          type: 'doc',
          id: 'getting-started/7/connect-to-gamedrive-from-unity-engine',
          label: 'Connect to GameDrive from Unity Engine',
        },
      ],
      'Core Components': [
        {
          type: 'doc',
          id: 'core-components/intro',
          label: 'Core Components Introduction',
        },
        {
          'Endpoint': [
            {
              type: 'doc',
              id: 'endpoints/introduction',
              label: 'Introduction',
            },
            'endpoints/create-an-endpoint',
            'endpoints/using-endpoint',
          ],
          'VirtualGood': [
            {
              type: 'doc',
              id: 'virtual-goods/introduction',
              label: 'Introduction',
            }, {
              type: 'doc',
              id: 'virtual-goods/create-virtual-good',
              label: 'Create VirtualGood',
            }, {
              type: 'doc',
              id: 'virtual-goods/using-virtual-good',
              label: 'Using VirtualGood',
            },],
          'CustomData': [
            {
              type: 'doc',
              id: 'custom-data/introduction',
              label: 'Introduction',
            }, {
              type: 'doc',
              id: 'custom-data/create-custom-data',
              label: 'Create CustomData',
            }, {
              type: 'doc',
              id: 'custom-data/using-custom-data',
              label: 'Using CustomData',
            },],
          'Player': [
            {
              type: 'doc',
              id: 'players/introduction',
              label: 'Introduction',
            }, {
              type: 'doc',
              id: 'players/using-player',
              label: 'Using Player',
            }],
          'Room': [
            {
              type: 'doc',
              id: 'rooms/introduction',
              label: 'Introduction',
            }, {
              type: 'doc',
              id: 'rooms/schema/schema',
              label: 'Schema',
            },
            {
              type: 'doc',
              id: 'rooms/definitions/definitions',
              label: 'Definitions',
            },
          ],
        }
      ],
    },
  ],
  apiSidebar: [
    'api/intro',
    {
      'Server side': [{
        type: 'category',
        label: 'Modules',
        items: [{
          type: 'doc',
          id: 'api/server-side/modules/gamedrive',
          label: 'gamedrive',
        },
        {
          type: 'doc',
          id: 'api/server-side/modules/gamedrive-engine',
          label: 'gamedrive-engine',
        }, {
          type: 'doc',
          id: 'api/server-side/modules/gamedrive-room',
          label: 'gamedrive-room',
        },
        ],
      },],

    },
    // 'api/authentication',
    // 'api/authorization',
    // 'api/endpoint',
  ],
};

export default sidebars;
