import dummy from './dummy';
import {snippet, name, desc, authors, signature, since, param, JS_DOC_TYPE} from '../_docRef';

@name('dummy')
@desc('Vestibulum id ligula porta felis euismod semper.')
@param({
    name: 'foo',
    type: JS_DOC_TYPE.BOOLEAN,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isOptional: true
})
@param({
    name: 'bar',
    type: JS_DOC_TYPE.OBJECT,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isOptional: true
})
@param({
    name: 'boo',
    type: JS_DOC_TYPE.STRING,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isOptional: true
})
@authors('Thomas Seberechts')
@since('<$SINCE$>')
@signature('({foo = true, bar = {}, far})')
@snippet(dummy)
class dummyDoc {
}

export default dummyDoc;
