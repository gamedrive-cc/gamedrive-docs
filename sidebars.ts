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
          id: 'getting-started/7/connect-to-gamedrive-via-unity-engine',
          label: 'Connect to GameDrive via Unity Engine',
        },
        {
          type: 'doc',
          id: 'getting-started/8/connect-custom-websocket-room-via-unity-engine',
          label: 'Connect to Custom WebSocket Room via Unity Engine',
        },
      ],
      'Core Components': [
        {
          type: 'doc',
          id: 'core-components/intro',
          label: 'Introduction to Core Components',
        },
        {
          'Authentication': [
            {
              type: 'doc',
              id: 'core-components/authentication/introduction',
              label: 'Authentication Introduction',
            },
            {
              type: 'doc',
              id: 'core-components/authentication/authentication-details',
              label: 'Authentication Details',
            },
          ],
          'Endpoint': [
            {
              type: 'doc',
              id: 'core-components/endpoints/introduction',
              label: 'Endpoints Introduction',
            },
            {
              type: 'doc',
              id: 'core-components/endpoints/endpoint-in-details',
              label: 'Endpoints in details',
            },
          ],
          'Custom Data': [
            {
              type: 'doc',
              id: 'core-components/custom-data/introduction',
              label: 'Custom Data Introduction',
            },
            {
              type: 'doc',
              id: 'core-components/custom-data/custom-data-in-details',
              label: 'Custom Data in details',
            },
            {
              type: 'doc',
              id: 'core-components/custom-data/manager-data-of-custom-data',
              label: 'Manage data of Custom Data',
            },
            {
              type: 'doc',
              id: 'core-components/custom-data/using-transactions',
              label: 'Using transactions',
            },
          ],
          'Virtual Goods': [
            {
              type: 'doc',
              id: 'core-components/virtual-goods/introduction',
              label: 'Virtual Goods Introduction',
            }, {
              type: 'doc',
              id: 'core-components/virtual-goods/virtual-goods-in-details',
              label: 'Virtual Goods in details',
            }
          ],
          'Room': [
            {
              type: 'doc',
              id: 'core-components/rooms/introduction',
              label: 'Introduction',
            }
          ],
          'Action': [
            {
              type: 'doc',
              id: 'core-components/action/introduction',
              label: 'Actions Introduction',
            },
          ],
          'Players': [
            {
              type: 'doc',
              id: 'core-components/players/introduction',
              label: 'Player Introduction',
            }, {
              type: 'doc',
              id: 'core-components/players/using-player',
              label: 'Using Player',
            }],
        }
      ],
      'In-depth': [
        {
          type: 'doc',
          id: 'in-depth/intro',
          label: 'In-depth Introduction',
        },
        {
          type: 'doc',
          id: 'in-depth/module.json/index',
          label: 'module.json',
        },
        {
          type: 'doc',
          id: 'in-depth/vm',
          label: 'VM',
        },
        {
          type: 'doc',
          id: 'in-depth/export-import',
          label: 'Export and Import',
        },
        {
          type: 'doc',
          id: 'in-depth/caution-and-limitation',
          label: 'Limitation and Caution',
        },

      ],
    },
  ],
  apiSidebar: [
    'api/intro',
    {
      'Server side modules': [
        {
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
    },
  ],
};

export default sidebars;
