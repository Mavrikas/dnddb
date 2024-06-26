import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'
import styles from './LinkList.module.css'
import { Url } from 'next/dist/shared/lib/router/router'
import { Title } from '../Title/Title'
import { LinkListProps } from './types'

export const LinkList = ({
    data,
    subHeader,
    hasLinks = true,
}: LinkListProps) => {
    return (
        data.length > 0 && (
            <List className={styles.list}>
                <Title
                    type="h6"
                    title={subHeader}
                    extraStyles={{ 'text-align': 'left !important' }}
                />
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
