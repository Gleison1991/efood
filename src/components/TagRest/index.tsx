import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const TagRest = ({ children, size = 'big' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default TagRest
