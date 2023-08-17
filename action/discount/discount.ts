import axios from 'axios';
import { DISCOUNT_URL } from '../api_url';
import { objectToQueryParamString } from '@/lib/utils';
import { queryParamsType } from '@/types/utils';
import { DiscountType } from '@/types/package';

const get = async (obj: queryParamsType) => {
    const { data } = await axios.get(`${DISCOUNT_URL}` + objectToQueryParamString(obj))
    return data
}

const post = async ({ form, token }: { form: Partial<DiscountType>, token: string }) => {
    const { data } = await axios.post(DISCOUNT_URL)
    return data
}

const discount = { get, post }
export default discount