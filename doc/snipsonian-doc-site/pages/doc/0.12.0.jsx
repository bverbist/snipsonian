import React from 'react';
import Version from '../../components/version/Version';
import docs from '../../prev_versions/0.12.0/_docs';

const versionConfig = {
    docs,
    v: '0.12.0'
};

export default () => (
    <Version config={versionConfig} />
);