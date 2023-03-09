const moxios = jest.genMockFromModule('axios')
// @ts-ignore
moxios.create = jest.fn(() => moxios)


export default moxios as any
