import { Suspense } from 'react'
import { Grid } from '../../Grid/Grid'

export const EquipementCategories = ({ data }: { data: any }) => {
    return (
        <Suspense fallback="loading...">
            <Grid data={data.equipment} />
        </Suspense>
    )
}
