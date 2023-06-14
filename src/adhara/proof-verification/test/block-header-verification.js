const assert = require('assert')

const blockHeaderVerification = require('../src/block-header-verification')

describe('Blockcheader Proof Verification', function () {
  it("should verify a block header's signatures", async function () {
    const isVerified = await blockHeaderVerification.verifyValidatorSeals(signatureOrProof, chainHeadValidators)
    assert.equal(isVerified, true, "Unable to verify signatures on block header")
  });
})

const chainHeadValidators = [ '0xca31306798b41bc81c43094a1e0462890ce7a673' ]

const signatureOrProof = '0x00000000000000000000000000000000000000000000000000000000000000c075000e4e7a45b0c26bad2ea3bd276f6f4fbfec4ef5751ec33859d12d3897eecc09d5df28dd921563105e8e21dc7b4ad825d644b218b41982b11f262806d623fa000000000000000000000000000000000000000000000000000000000000076000000000000000000000000000000000000000000000000000000000000009c00000000000000000000000000000000000000000000000000000000000000c20000000000000000000000000000000000000000000000000000000000000066af90667f90664822080b9065ef9065b01830fa6f7b9010000000000000000000000000000000000000800400000000000000020000400000000000000020000008000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000080000000000000000000000000040000000000000014000000000000000400000008000000000000002000000000000000000000000000000000040000000000000000000000000000000008000000100000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000200000000000f90550f9021a94f1705d25c81fb6eab1646a08c1eac04e1682c065e1a04a088333602fc5fc4f1782002fd83cb872f641d7564993fcae5a70619d371b83b901e00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000001686f6c64457865637574696f6e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000632060fb00000000000000000000000000000000000000000000000000000000000001c00000000000000000000000000000000000000000000000000000000001348bf100000000000000000000000000000000000000000000000000000000000000013100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e757365724163636f756e74496432000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e757365724163636f756e744964310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f89994f1705d25c81fb6eab1646a08c1eac04e1682c065e1a0f0e25c63981e9a617375c8244c8ac144e4e520acc2cb08e2d4c3781b1a02c067b860000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000013100000000000000000000000000000000000000000000000000000000000000f8799487780452339d47a5d86c1a8e77eadb2c46c0ac3ae1a0e86cf26454ff6ddddafa95eaf2baab1df2c062c4341cec61ccfafae50eabf8d3b8400000000000000000000000002afcc963a8c7119b700063e17a2d46846ba8b50e0000000000000000000000000000000000000000000000000000000000000000f9021a94d104343c69174447b34981c2c3e536a66c159c48e1a07a752c4d100a96be23f60f072fed1f33da2890fbe45eb15af52750faa2772a92b901e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fd2898e8df49fb8de957a6b75bcd4ba55eb550f8000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001448903901f000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000013100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e757365724163636f756e74496431000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e757365724163636f756e744964320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023ef9023ba0e333a31e86179fb305649b260f93ec17355d46409fc4f80d7a8bd885975fc699a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794ca31306798b41bc81c43094a1e0462890ce7a673a09850cf8b19f4707e4f2244b2d86a54182218021a6d371969f1a96a47dbeb70d4a00be8018028745195ce85510ec4e51adecff3941207e6defb6389ca087f98e38aa075000e4e7a45b0c26bad2ea3bd276f6f4fbfec4ef5751ec33859d12d3897eeccb9010000000000000000000000000000000000000800400000000000000020000400000000000000020000008000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000080000000000000000000000000040000000000000014000000000000000400000008000000000000002000000000000000000000000000000000040000000000000000000000000000000008000000100000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000200000000000018301ae8e8405f5e100830fa6f784632060fbb83ff83da00000000000000000000000000000000000000000000000000000000000000000d594ca31306798b41bc81c43094a1e0462890ce7a673808400000000a063746963616c2062797a616e74696e65206661756c7420746f6c6572616e636588000000000000000000000000000000000000000000000000000000000000000000000000000000000239f90236a0e333a31e86179fb305649b260f93ec17355d46409fc4f80d7a8bd885975fc699a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d4934794ca31306798b41bc81c43094a1e0462890ce7a673a09850cf8b19f4707e4f2244b2d86a54182218021a6d371969f1a96a47dbeb70d4a00be8018028745195ce85510ec4e51adecff3941207e6defb6389ca087f98e38aa075000e4e7a45b0c26bad2ea3bd276f6f4fbfec4ef5751ec33859d12d3897eeccb9010000000000000000000000000000000000000800400000000000000020000400000000000000020000008000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000080000000000000000000000000040000000000000014000000000000000400000008000000000000002000000000000000000000000000000000040000000000000000000000000000000008000000100000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000200000000000018301ae8e8405f5e100830fa6f784632060fbb83af838a00000000000000000000000000000000000000000000000000000000000000000d594ca31306798b41bc81c43094a1e0462890ce7a67380a063746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365880000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045f843b84177d6585b25b5b165d65925decc443dbf374941b36a71c0e5ee4bb7e65f3185fc2eaea091c9ac4b8faf09fa6d6d21a18d7d2905667f381ee096ae8103235bc8b301000000000000000000000000000000000000000000000000000000'
