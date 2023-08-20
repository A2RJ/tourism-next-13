import axios from 'axios';
import { PACKAGE_URL } from '../api_url';
import { objectToQueryParamString } from '@/lib/utils';
import { queryParamsType } from '@/types/utils';

const get = async (obj: queryParamsType) => {
    const { data } = await axios.get(`${PACKAGE_URL}/all` + objectToQueryParamString(obj))
    return data
}

const tourPackage = { get }
export default tourPackage