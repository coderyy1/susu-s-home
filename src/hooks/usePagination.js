import { watch, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function usePagination({ defaultQuery, fetchFn, typeName }) {
  const route = useRoute();
  const router = useRouter();
  const state = reactive({
    page: Number(route.query.page) || defaultQuery.page,
    [typeName]: route.query[typeName] || defaultQuery[typeName]
  });

  // 初始化：补齐 query 缺失项
  onMounted(() => {
    const patch = {};
    if (!route.query.page) patch.page = defaultQuery.page;
    if (!route.query[typeName]) patch[typeName] = defaultQuery[typeName];

    if (Object.keys(patch).length) {
      router.replace({
        path: route.path,
        query: {
          ...route.query,
          ...patch
        }
      });
    }
  });

  watch(
    () => [route.query.page, route.query[typeName]],
    () => {
      state.page = Number(route.query.page) || defaultQuery.page;
      state[typeName] = route.query[typeName] || defaultQuery[typeName];
      fetchFn(state.page, state[typeName]);
    },
    { immediate: true }
  );

  const updateQuery = (key, value) => {

    const nextQuery = {
      ...route.query,
      [key]: value,
    };

    if (key !== 'page') {
      nextQuery.page = 1;
    }

    router.replace({
      path: route.path,
      query: nextQuery,
    });
  };

  return { state, updateQuery };
}