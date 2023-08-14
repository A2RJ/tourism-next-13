import axios from 'axios';
import { PACKAGE_URL } from '../api_url';
import { objectToQueryParamString, queryParamsType } from '@/lib/utils';

const get = async (obj: queryParamsType) => {
    const { data } = await axios.get(`${PACKAGE_URL}` + objectToQueryParamString(obj))
    return data
}

const tourPackage = { get }
export default tourPackage