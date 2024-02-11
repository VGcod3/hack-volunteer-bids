import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { setCurrentPage } from '@/store/filteringData/filterSlice';

import { useDispatch, useSelector } from '@/store/hooks';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useId } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function PaginationElement() {
  const totalPages = useSelector((state) => state.filter.totalPages);
  const currentPage = useSelector((state) => state.filter.currentPage);

  const dispatch = useDispatch();

  const id = useId();

  const handlePagination = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const renderPaginationItems = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => (
        <PaginationItem key={id}>
          <PaginationLink isActive={currentPage === i + 1} onClick={() => handlePagination(i + 1)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ));
    } else {
      const paginationItems = [];

      if (currentPage > 2) {
        paginationItems.push(
          <PaginationItem key={id}>
            <PaginationLink onClick={() => handlePagination(1)}>1</PaginationLink>
          </PaginationItem>,
        );
      }

      if (currentPage > 3) {
        paginationItems.push(
          <PaginationItem key={id} className='hidden md:block'>
            <PaginationEllipsis />
          </PaginationItem>,

          <Separator orientation='vertical' className='md:hidden' />,
        );
      }

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 0 && i <= totalPages) {
          paginationItems.push(
            <PaginationItem key={id}>
              <PaginationLink isActive={currentPage === i} onClick={() => handlePagination(i)}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
      }

      if (currentPage < totalPages - 2) {
        paginationItems.push(
          <PaginationItem key={id} className='hidden md:block'>
            <PaginationEllipsis />
          </PaginationItem>,

          <Separator orientation='vertical' className='md:hidden' />,
        );
      }

      if (currentPage < totalPages - 1) {
        paginationItems.push(
          <PaginationItem key={id}>
            <PaginationLink onClick={() => handlePagination(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      return paginationItems;
    }
  };

  return (
    <Pagination className='mt-4'>
      <PaginationContent>
        {currentPage !== 1 && (
          <Button
            className='px-2 md:px-4 py-2'
            variant='ghost'
            size={'sm'}
            onClick={() => handlePagination(currentPage - 1)}>
            <ChevronLeftIcon size={24} strokeWidth={1.5} />
            <span className='hidden md:block'>Previous</span>
          </Button>
        )}

        {renderPaginationItems()}

        {currentPage !== totalPages && (
          <Button
            className='px-2 md:px-4 py-2'
            variant='ghost'
            size={'sm'}
            onClick={() => handlePagination(currentPage + 1)}>
            <span className='hidden md:block'>Next</span>
            <ChevronRightIcon size={24} strokeWidth={1.5} />
          </Button>
        )}
      </PaginationContent>
    </Pagination>
  );
}
