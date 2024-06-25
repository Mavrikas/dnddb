import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'
import styles from './LinkList.module.css'
import { Url } from 'next/dist/shared/lib/router/router'

type Data = {
    url?: Url
    name: string
    index?: string
}
type LinkListProps = {
    subHeader: string
    data: Data[]
    hasLinks?: boolean
}
export const LinkList = ({
    data,
    subHeader,
    hasLinks = true,
}: LinkListProps) => {
    return (
        data.length > 0 && (
            <List subheader={subHeader} className={styles.list}>
                {hasLinks
                    ? data.map((item, i: number) => {
                          return (
                              <Link href={item.url as Url} key={item.name + i}>
                                  <ListItem className={styles.listItem}>
                                      {item.name}
                                  </ListItem>
                              </Link>
                          )
                      })
                    : data.map((item, i: number) => {
                          return (
                              <ListItem
                                  key={item.name + i}
                                  className={styles.listItem_noLink}
                              >
                                  {item.name}
                              </ListItem>
                          )
                      })}
            </List>
        )
    )
}
