
-- Drop ALL existing select policies (with and without trailing spaces)
DROP POLICY IF EXISTS "Products are publicly readable" ON public.products;
DROP POLICY IF EXISTS "Products are publicly readable " ON public.products;
DROP POLICY IF EXISTS "Quantity options are publicly readable" ON public.quantity_options;
DROP POLICY IF EXISTS "Quantity options are publicly readable " ON public.quantity_options;

-- Recreate as PERMISSIVE (default)
CREATE POLICY "products_public_read"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "quantity_options_public_read"
  ON public.quantity_options FOR SELECT
  USING (true);
