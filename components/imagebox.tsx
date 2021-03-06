import { Box } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  src: StaticImageData
  alt?: string
  border?: string
}

const ImageBox: React.FunctionComponent<Props> = ({ src, alt }) => {
  return (
    <>
      <Box
        display='block'
        position='relative'
        overflow='hidden'
        width='505px'
        height='509px'
        borderRadius='lg'
        border='1px'
        borderColor='gray.100'
      >
        <Image
          src={src}
          alt={alt}
          layout='responsive'
          objectFit='contain'
          loading='eager'
        />
      </Box>
    </>
  )
}

const ImageRect: React.FunctionComponent<Props> = ({
  src,
  alt,
  border = '1px'
}) => {
  return (
    <>
      <Box
        display='block'
        position='relative'
        overflow='hidden'
        width={{ base: 'full', md: '875px' }}
        borderRadius='lg'
        border={border}
        borderColor='gray.100'
      >
        <Image
          src={src}
          alt={alt}
          layout='responsive'
          objectFit='contain'
          loading='eager'
          placeholder='blur'
          priority={true}
        />
      </Box>
    </>
  )
}

export { ImageRect }
export default ImageBox
