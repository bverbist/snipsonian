import {group, registerGroups} from './_docRef';

import assertDoc from './generic/assert.doc';
import isDoc from './generic/is.doc';

import addPropDoc from './decorator/addProp.doc';
import builderDoc from './decorator/builder.doc';
import collapsableDoc from './decorator/collapsable.doc';

registerGroups([
    group('generic').snippets(
        assertDoc,
        isDoc
    ),
    group('decorator').snippets(
        addPropDoc,
        builderDoc,
        collapsableDoc
    )
]);