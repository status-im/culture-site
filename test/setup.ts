import 'jsdom-global/register'
;(global as any).GIT_VERSION = 'test'

require.extensions['.svg'] = () => 'test-image.svg'
require.extensions['.png'] = () => 'test-image.png'
require.extensions['.jpg'] = () => 'test-image.jpg'
