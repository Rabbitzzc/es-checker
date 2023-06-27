import { test } from 'uvu'
import * as assert from 'uvu/assert'
import {getRealEcmaVersion} from '../src/utils/index'

test('getRealEcmaVersion()', () => {
    assert.is(getRealEcmaVersion('es6'), 'es6')
    assert.is(getRealEcmaVersion('es7'), 'es7')
    assert.is(getRealEcmaVersion('es8'), 'es8')
    assert.is(getRealEcmaVersion('es9'), 'es9')
    assert.is(getRealEcmaVersion('es10'), 'es10')
    assert.is(getRealEcmaVersion('es11'), 'es11')
    assert.is(getRealEcmaVersion('es12'), 'es12')
    assert.is(getRealEcmaVersion('es2015'), 'es6')
    assert.is(getRealEcmaVersion('es2016'), 'es7')
    assert.is(getRealEcmaVersion('es2017'), 'es8')
    assert.is(getRealEcmaVersion('es2018'), 'es9')
    assert.is(getRealEcmaVersion('es2019'), 'es10')
    assert.is(getRealEcmaVersion('es2020'), 'es11')
    assert.is(getRealEcmaVersion('es2021'), 'es12')
})

test.run()
